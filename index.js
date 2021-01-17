// Here we are going to define a function to add our items
function addItem(){
    // The value task_info is the input box, we add .value to get the text in the input box
    var task_info = document.getElementById("task")

    // This is the task area in which we will add the new tasks
    var task_Area = document.getElementById("taskArea") 
    
    var newTaskOuter = document.createElement("DIV") // Outer Container for tasks
    var newTask = document.createElement("DIV") // Task that is added
    var x_item = document.createElement("BUTTON") // X for remove the added tasks

    x_item.innerHTML = "&#10006" // `X`
    x_item.classList.add("remove_item")  
    x_item.onclick = function(){ // Here we assign the onclick function
        removeItem(this) // We are going to use this function to remove a tasks
    }

    newTask.innerHTML = task_info.value 
    task_info.value = "" // We clear the input box after getting the value from it

    newTask.classList.add("addedTask") // Adding the class addedTask to the newly created `Task`

    newTaskOuter.append(newTask, x_item) // Here we add the new task and the `x` to the `Task Container`
    task_Area.appendChild(newTaskOuter) // Here we add the outer task container to the `main Task Area Container`
}

// This function here removes the item
function removeItem(){
    let close_btn = event.target
    parentTask = event.target.parentElement // This is the div that contains the `task and the x`
    let task_to_be_deleted = parentTask.children[0] // Now you have the task
    parentTask.remove()
    alert("Task will be removed")
}