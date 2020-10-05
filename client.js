console.log('script loaded')

//add click event hangler on button
let $button = document.getElementById("addTodo")
$button.onclick = addTodo()

//define the button click handler
function addTodo(){
    console.log("button was clicked")
}