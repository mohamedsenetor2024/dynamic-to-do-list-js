// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the Add Task button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Set click handler for the remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


