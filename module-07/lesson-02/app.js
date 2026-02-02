const upForm = document.querySelector(".header-form");
const addList = document.querySelector(".tasks-list");
const tasks = [
  { id: 1, name: "Roman", description: "12435fdszs" },
  { id: 2, name: "R2an", description: "124dsadszs" },
];

upForm.addEventListener("submit", onHeaderFormSubmit);
addList.addEventListener("click", onButtonClick);
addList.addEventListener("click", onButtonClick);
renderTasks(tasks);

function onHeaderFormSubmit(event) {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value;
  const taskDescr = event.target.elements.taskDescription.value;
  const task = { id: Date.now(), name: taskName, description: taskDescr };
  tasks.push(task);
  addTask(task);
}
function addTask(task) {
  const taskMarkup = ` <li class="task-list-item">
  <div>
                <input type="checkbox" />
                <button class="task-list-item-btn" id="${task.id}" >Delete</button>
              </div>
              <h3>${task.name}</h3>
              <p>${task.description}</p>
            </li>`;
  addList.insertAdjacentHTML("beforeend", taskMarkup);
}

function deleteTask(tasks, taskId) {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function onButtonClick(event) {
  const clickedEl = event.target;
  if (clickedEl.nodeName === "BUTTON") {
    deleteTask(tasks, Number(clickedEl.id));

    renderTasks(tasks);
  }
}

function renderTasks(tasks) {
  addList.innerHTML = "";
  tasks.map(addTask);
}

function onButtonClick(event) {
  if (event.target.nodeName !== "INPUT") {
    return;
  }
  const itemEl = event.target.closest(".task-list-item");
  // if (event.target.checked === true) {
  itemEl.querySelector("h3").classList.toggle("completed");
  itemEl.querySelector("p").classList.toggle("completed");
  // }
}
