// Get the main container and the body
var body = document.getElementsByTagName('body');
var container = document.getElementById('main-container');

// Get the open buttons for each project
const modalBtns = document.querySelectorAll("button.modalBtn");

// Get the close button for each project
var closeBtns = document.querySelectorAll("span.Close");


// Open the modal
for (let btn of modalBtns){
    const project = btn.id
    const modal = document.getElementById(project.split("-")[0] + "-" + "modal");

    btn.addEventListener('click', function(){
        setTimeout(function() {
            body.className = "is-blurred";
            modal.className = "Modal";
        }, 200);
    })
}


// Close the modal when x is clicked
for (let btn of closeBtns){
    const project = btn.id
    const modal = document.getElementById(project.split("-")[0] + "-" + "modal");

    btn.addEventListener('click', function(){
        modal.className = "Modal is-hidden";
        body.className = "";
    })
}


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll(".Modal")

    for (let modal of modals){
        if (event.target == modal) {
            modal.className = "Modal is-hidden";
            body.className = "";
        }
    }
})