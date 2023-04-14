let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Please enter a task!');
        return;
    }

    const task = { 
        text: taskText, 
        isComplete: false,
        createdAt: new Date()
    };

    tasks.push(task);

    updateLists();
    taskInput.value = '';
}

function completeTask(index) {
    tasks[index].isComplete = true;

    updateLists();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    updateLists();
}

function updateLists() {
    const pendingList = document.getElementById('pendingTasks');
    const completedList = document.getElementById('completedTasks');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const taskText = document.createTextNode(task.text);

        li.appendChild(taskText);

        if (task.isComplete) {
            completedList.appendChild(li);
        } else {
            const completeButton = document.createElement('button');
            const deleteButton = document.createElement('button');

            completeButton.innerText = 'Complete';
            deleteButton.innerText = 'Delete';

            completeButton.onclick = () => completeTask(index);
            deleteButton.onclick = () => deleteTask(index);

            li.appendChild(completeButton);
            li.appendChild(deleteButton);

            pendingList.appendChild(li);
        }
    });
}
