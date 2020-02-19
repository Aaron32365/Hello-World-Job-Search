$("#home").on("click", function(){
    console.log("home button clicked!");
    var newWindow = window.open("home.html", "_blank");
    if(newWindow){
        newWindow.focus();   
    }
    else{
        alert("Opening home page failed.");
    }
});