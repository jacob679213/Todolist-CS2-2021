//console.log('script loaded')

//add click event hangler on button
let $button = document.getElementById('addTodo')
let $textBox = document.getElementById('inputBox')
let $list = document.getElementById('list')
$button.onclick = addTodo

//define the button click handler
function addTodo(event){
    //console.log("button was clicked")
    //$button.style.backgroundColor = 'red'
    
    //get text from input
    let newTodoText = $textBox.value
    console.log(newTodoText)
    //create new list item
    let $newTodoItem = document.createElement('li') 
    $newTodoItem.innerHTML = newTodoText
    //put item in list
    $list.append($newTodoItem)
}

//variable for heading element
let $heading = document.getElementByid('heading')
//set 'changeColor' function as click handler on header
$heading.onclick = changeColor
//define a 'changeColor' function

function changeColor(event) {
    $heading.style.color = 'red'
}
