// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.




// script.js
// Section 2: App State Variables
let tasks = [];





// script.js
// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value

    // TODO: Validate input fields

    if (taskNameInput === '' || deadlineInput === '') {
        alert("Please fill out both task name and deadline.");
        return; // Return from the function
    }

    // TODO: Update the tasks array
    tasks.push({ name:
        taskName, description: taskDescription, deadline: taskDeadline })
    render();
    }
    // Function to render tasks in the table
    function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    }
    // Function to initialize the table
    function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
    }




