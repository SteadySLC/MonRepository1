document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Supprimer</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            addDeleteHandler(taskItem);
        }
    });

    function addDeleteHandler(taskItem) {
        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });
    }
});
