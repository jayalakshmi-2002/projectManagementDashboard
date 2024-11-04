let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskName = taskInput.value.trim();

    if (taskName !== "") {
        const task = {
            name: taskName,
            status: 'Pending'
        };
        tasks.push(task);
        taskInput.value = "";  // Clear input field
        renderTasks();  // Update task list
    } else {
        alert("Please enter a task name");
    }
}

// Function to change the status of a task
function changeStatus(index, newStatus) {
    tasks[index].status = newStatus;
    renderTasks();
}

// Function to render the task list in the table
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";  // Clear existing content

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        const taskCell = document.createElement("td");
        taskCell.textContent = task.name;

        const statusCell = document.createElement("td");
        statusCell.textContent = task.status;

        const actionCell = document.createElement("td");
        const statusSelect = document.createElement("select");
        const statuses = ['Pending', 'In Progress', 'Completed'];
        
        statuses.forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            if (status === task.status) {
                option.selected = true;
            }
            statusSelect.appendChild(option);
        });

        statusSelect.onchange = () => changeStatus(index, statusSelect.value);
        actionCell.appendChild(statusSelect);

        row.appendChild(taskCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);
        taskList.appendChild(row);
    });
}