const taskList = document.getElementById("Task-table");
const taskForm = document.querySelector("form");
const tasks = [];
const headerRow = taskList.querySelector("tr");
function showTasks() {
  taskList.innerHTML = "";
  taskList.appendChild(headerRow)
  const temporaryTasks = tasks.slice(0);
  for (let i = 0; i < temporaryTasks.length; i = i + 1) {
    const currentTask = temporaryTasks[i];
    const row = taskList.insertRow();
    row.dataset.index = String(i);
    const taskCell = row.insertCell();
    taskCell.textContent = currentTask.task;
    const typeCell = row.insertCell();
    typeCell.textContent = currentTask.type;
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "delete-Button";
    button.type = "button";
    const buttonCell = row.insertCell();
    buttonCell.appendChild(button);
  }
}
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const taskInput = document.getElementById("task-input");
  const typeInput = document.getElementById("type-input");
  const cleanedTask = taskInput.value.trim();
  const cleanedType = typeInput.value.trim();
  if (cleanedTask == "") {
    return;
  }
  tasks.push({
    task: cleanedTask,
    type: cleanedType
  });
  showTasks();
  taskInput.value = "";
  typeInput.value = "";
});
taskList.addEventListener("click", function(event) {
  if (event.target.className === "delete-Button") {
    const buttonParent = event.target.parentElement;
    const row = buttonParent.parentElement;
    const indexToDelete = Number(row.dataset.index);
    tasks.splice(indexToDelete, 1);
    showTasks();
  }
});
