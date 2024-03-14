// Section 1: TODOs
// Register submissions from the user on the form.
// Determine the value of the data submitted and add it to a JavaScript array called tasks.
// Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
let taskForm = document.getElementById("taskForm");
let taskTable = document.getElementById("taskTable");

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // Get form input values
    let taskName = document.getElementById ('taskName').value;
    let taskDescription = document.getElementById ('taskDescription').value;
    let taskDeadline = document.getElementById ('taskDeadline').value;

    // Validate input fields
    if (!taskName || !taskDescription) {
        alert('Task name and description are required!');
        return;
    }

    // Update the tasks array
    tasks.push({ name: taskName, description: taskDescription });
    render();
}

// Function to render tasks in the table
function render() {
    // Clear existing rows
    taskTable.innerHTML = '';

    // Append new rows for each task
    tasks.forEach(task => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        `;
        taskTable.appendChild(newRow);
    });
}

// Function to initialize the table
function init() {
    // Call the render function to initially populate the table
    render();
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission); 

// Call the init function to set up the initial state of the app
init();
