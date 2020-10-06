//console.log('script loaded')

//add click event hangler on button
let $button = document.getElementById('addTodo')
let $textBox = document.getElementById('inputBox')
let $list = document.getElementById('list')
let $completed = document.getElementById('complete')
let $clearButton = document.getElementById('clearButton')
$button.onclick = addTodo()
$clearButton.onclick = clear()

//define the button click handler
function addTodo(event){
    //console.log("button was clicked")
    //$button.style.backgroundColor = 'red'
    
    //get text from input
    let newTodoText = $textBox.value
    console.log(newTodoText)
    //create new list item
    let $newTodoItem = document.createElement('li') 
    $newTodoItem.innerHTML = newTodoText+'<button onclick = taskDone(event)>Done</button>'
    //put item in lis
    $list.append($newTodoItem)
}

function taskDone(event) {
    //event.target is the button that was clicked
    let $listItem = event.target.parentElement
    //console.log($listItem)
    event.target.remove()
    $listItem.style.textDecoration = 'line-through'
    $completed.append($listItem)
}

function clear(event){
    console.log('button pressed')
    $completed.innetHTML = ' '
}