//  searchButton.on("click", function(event){//jooble and adzuna
//     event.preventDefault()
//     showResults()

//   })

//   function showResults() {
//     $.ajax({
//         method: "GET",
//         url: " https://cors-anywhere.herokuapp.com/https://jooble.org/api/93dc224e-5942-428d-a649-3c0cf72ca314", //"https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=ba503580&app_key=ab0edfb98c4f1c19918f7b4366c2c833&results_per_page=10&what=" + qeury + "&where=" + testLocation,
//         dataType: "json",
//         data: {
//             "keywords": qeury,
//             "location": testLocation,
//             "radius": "50",
//             "page": "1"
//         },
//         success: function (response, status, xhr) {
            
//             console.log(response)
//             /*
//             var currentJobResults = $("<table><tr><th><h2>" + response.results[0].company.display_name + "</h2></th></tr>");
//             currentJobResults.append("<tr><td>" + response.results[0].title + "</tr></td>");
//             currentJobResults.append("<tr><td>" + response.results[0].location.display_name + "</tr></td>");
//             currentJobResults.append("<tr><td>" + response.results[0].description + "</tr></td>");
//             currentJobResults.append("<tr><td> " + response.results[0].redirect_url + "</tr></td>");
//             $("#testDiv").html(currentJobResults);
//             */
//     },
//         error: function (xhr, status, error) {
//             console.log(error)
//     }
// });
// }

var qeury = $("#userInput").val()
var testLocation = $("#locationInput").val()
$("#searchButton").on("click", function(){
    
    search()

})

function search(){ // function for retrieving data from APIs
    $.ajax({ // ajax called for pulling Adzuna jobs
        method: "GET",
        url:"https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=ba503580&app_key=ab0edfb98c4f1c19918f7b4366c2c833&results_per_page=10&what=" + qeury + "&where=" + testLocation,
        dataType: "json",
        success: function(response){
            var div = $("#testDiv")
            for(var i = 0; i < response.results.length; i++){
                var job = { // object with all job information
                    company: response.results[i].company.display_name, // company name
                    title: response.results[i].title, // job title
                    location: response.results[i].location.display_name, // location
                    description: response.results[i].description // description
                    //url: response.results[i].redirect_url
                }
                div.append(JSON.stringify(job))
            }
            console.log(response)

        },
        error: function(error){
            console.log(error)
        }
    })

    $.ajax({ // ajax call for pulling TheMuse jobs
        method: "GET",
        url:"https://www.themuse.com/api/public/jobs?q=" + qeury + "&location=" + testLocation + "&page=1",
        dataType: "json",
        success: function(response){

            console.log(response)

        },
        error: function(error){
            console.log(error)
        }
    })
}