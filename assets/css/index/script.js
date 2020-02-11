 
 var searchButton = $("#searchButton")
 var qeury = $("#userInput").val()
 var location = $("#locationInput").val()

 searchButton.on("click", function(event){
    event.preventDefault()
    var authJobQeury = "https://authenticjobs.com/api/?api_key=" + authJobAPI_Key + "&method=aj.jobs.search&keywords=" + qeury + "&location=" + location
    //var usaJobsQeury = "https://data.usajobs.gov/api/?api_key="  + usaJobsAPI_Key + "&Search?Keyword=" + qeury + "&LocationName=" + location

    // for(var i = 0; i < qeuries.length; i ++) {
    // }

    $.ajax({
        url: authJobQeury,
        method: "GET"
    })
    .then(function(response){
        data = response
        console.log(data)
    })

 })