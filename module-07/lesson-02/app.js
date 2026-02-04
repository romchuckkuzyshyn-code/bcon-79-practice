const upForm = document.querySelector(".header-form");
const addList = document.querySelector(".tasks-list");
const btn = document.querySelector(".task-list-item-btn");

upForm.addEventListener("submit", inputForm);
addList.addEventListener("click", removeTask);
addList.addEventListener("click", checkedTask);

function inputForm(event) {
  event.preventDefault();

  const titleValue = event.target.elements.taskName.value;
  const descrValue = event.target.elements.taskDescription.value;
  if (titleValue.trim() === "" || descrValue.trim() === "") {
    return;
  }
  const idTask = Date.now();

  const input = { titleValue, descrValue, idTask };

  addList.insertAdjacentHTML("beforeend", createTask(input));
  upForm.reset();
}

function createTask({ titleValue, descrValue, idTask }) {
  return `<li class="task-list-item" id="${idTask}">
  <div>
  <input type="checkbox" />
  <button class="task-list-item-btn">Delete</button>
  </div>
  <h3>${titleValue}</h3>
  <p>${descrValue}</p>
  </li>
  `;
}

function removeTask(event) {
  const removeList = event.target;
  if (removeList.tagName !== "BUTTON") {
    return;
  }
  removeList.closest(".task-list-item").remove();
}

function checkedTask(event) {
  const check = event.target;
  if (check.tagName !== "INPUT") {
    return;
  }
  const changeClass = check.closest(".task-list-item");
  changeClass.classList.toggle("complited");
  console.log("🚀 ~ checkedTask ~ changeClass:", changeClass);
}
