
$("#contact").on("click", function(){
    console.log("contact link clicked!");
    var newWindow = window.open("contact.html", "_blank");
    if(newWindow){
        newWindow.focus();
    }
    else{
        alert("Opening contact page failed.");
    }
});


