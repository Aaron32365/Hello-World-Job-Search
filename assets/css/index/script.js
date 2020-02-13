 
 var searchButton = $("#searchButton")
 var qeury = $("#userInput").val()
 var testLocation = $("#locationInput").val()

 searchButton.on("click", function(event){//jooble and adzuna
    event.preventDefault()
    showResults()
    function showResults() {
        $.ajax({
            method: "GET",
            url: "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=ba503580&app_key=ab0edfb98c4f1c19918f7b4366c2c833&results_per_page=10&what=" + qeury + "&where=" + testLocation,
            dataType: "json",
            success: function (response, status, xhr) {
                
                console.log(response)
                var currentJobResults = $("<table><tr><th><h2>" + response.results[0].company.display_name + "</h2></th></tr>");
                currentJobResults.append("<tr><td>" + response.results[0].title + "</tr></td>");
                currentJobResults.append("<tr><td>" + response.results[0].location.display_name + "</tr></td>");
                currentJobResults.append("<tr><td>" + response.results[0].description + "</tr></td>");
                currentJobResults.append("<tr><td> " + response.results[0].redirect_url + "</tr></td>");
                // currentJobResults.append("<tr><td>UV Index:</td><td>" + result["wind"]["speed"] + "</td></tr>");
                $("#testDiv").html(currentJobResults);
        },
            error: function (xhr, status, error) {
                console.log("Error")
        }
    });
}

  })