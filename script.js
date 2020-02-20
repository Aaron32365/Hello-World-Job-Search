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


$("#searchButton").on("click", function(){
    console.log($("#userInput").val())
    console.log($("#locationInput").val())
    event.preventDefault()
    var what = $("#userInput").val()
    var where = $("#locationInput").val() 
    localStorage.setItem(what, where)
    search()
    searchHistory()
})

function search(){ // function for retrieving data from APIs
    $.ajax({ // ajax called for pulling Adzuna jobs
        method: "GET",
        url:"https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=ba503580&app_key=ab0edfb98c4f1c19918f7b4366c2c833&results_per_page=10&what=" + $("#userInput").val() + "&where=" + $("#locationInput").val(),
        success: function(response){
            var div = $("#searchResults")
            for(var i = 0; i < response.results.length; i++){
                var job = { // object with all job information
                    company: response.results[i].company.display_name, // company name
                    title: response.results[i].title, // job title
                    location: response.results[i].location.display_name, // location
                    description: response.results[i].description // description
                    //url: response.results[i].redirect_url
                }

                div.append( 
                    "<tr> <td>" + job.company + "</td> <td>" + job.title + "</td> <td>" + job.location + "</td> <td>" + job.description + "</td>  </tr>"
                )
                div.append("<a href='" + response.results[i].redirect_url + "'>Apply Now</a>")
            }
            console.log(response)

        },
        error: function(error){
            console.log(error)
        }
    })
    /*
    $.ajax({ // ajax call for pulling TheMuse jobs
        method: "GET",
        url:    "https://www.themuse.com/api/public/jobs?q=" + $("#userInput").val() + "&location=" + $("#locationInput").val() + "&page=1",
        dataType: "json",
        success: function(response){
            console.log(response)
            var div = $("#searchResults") // add scroll wheel here
            for(var i = 0; i < response.results.length; i++){
                var job = { // object with all job information
                    company: response.results[i].company.name, // company name
                    title: response.results[i].name, // job title
                    location: response.results[i].locations[0].name, // location
                    description: response.results[i].description // description
                    //url: response.results[i].redirect_url
                }
                    div.append( 
                        "<tr> <td>" + job.company + "</td> <td>" + job.title + "</td> <td>" + job.location + "</td> <td>" + job.description + "</td>  </tr>"
                    )
                
            }

        },
        error: function(error){
            console.log(error)
        }
    })
    */
}

    
    
$(document).on("click", "#clearHistory", function(event){
    event.preventDefault()
    localStorage.clear()
    $("#recentSearches").empty()
})


function searchHistory(){
    var history = $("#recentSearches")
    $("#recentSearches").empty()
    for( var i = 0; i < localStorage.length; i++){
        history.append(localStorage.key(i) + " - ")
        history.append(localStorage.getItem(localStorage.key(i)) + "<br>")
    }
}

//DORIAN SEARCH HISTORY FUNCTION
//var textInput = $("#userInput").val().toUpperCase();
//var par = $("<p></p>").text(textInput); //This is the line to make search history a clickable link
//console.log(textInput);
//$("#recentSearches").append(par);
//return;



// SAVE LOCAL
//var postJobForm = document.querySelector('#postJobForm');
//var jTitle = document.querySelector('#jTitle');
//var cName = document.querySelector('#cName');
//var lName = document.querySelector('#lName');
//var wURL = document.querySelector('#wURL');
//var eMail = document.querySelector('#eMail');
//var jDesc = document.querySelector('#jDesc');
//var cRadio = document.querySelector('#cRadio');
//var eRadio = document.querySelector('#eRadio');
//var hRadio = document.querySelector('#hRadio');

// $("#jSubmit").on("click", function(){
//     var jTitle = document.querySelector('#jTitle')
//     localStorage.setItem("jTitle", job title)
//     event.preventDefault();
// })




//postJobForm.addEventListener('submit', function (event) {
	//event.preventDefault();
	// Save the list to localStorage below
	
//})