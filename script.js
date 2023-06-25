// DOM Elements Selector
const popUpModal = document.getElementById("popup-modal");
const modalCloseButton = document.getElementById("modal-close-button");
const createNewTask = document.getElementById("add-task");

createNewTask.addEventListener("click", () => {
  clearInputFields();
  toggleVisibility(popUpModal);
});

modalCloseButton.addEventListener("click", () => {
  clearInputFields();
  toggleVisibility(popUpModal);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F3") {
    clearInputFields();
    toggleVisibility(popUpModal);
  }
});

const toggleVisibility = (domElement) => {
  domElement.classList.toggle("hidden");
};

const clearInputFields = () => {
  const modalTaskTitle = (document.getElementById("modal-task-title").value =
    "");
  const modalTaskDescription = (document.getElementById(
    "modal-task-description"
  ).value = "");
};

const getDate = () => {
  let todaysDate = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthIndex = todaysDate.getMonth();
  let month = months[monthIndex];

  let day = todaysDate.getDate();
  let year = todaysDate.getFullYear();

  return `${month}, ${day}, ${year}`;
};

let modalCreatedDate = (document.getElementById(
  "modal-created-date"
).textContent = getDate());

let modalTaskSubmit = document.getElementById("modal-task-submit");

modalTaskSubmit.addEventListener("click", () => {
  let newTaskTitle = document.getElementById("modal-task-title").value;

  let newTaskDescription = document.getElementById(
    "modal-task-description"
  ).value;

  if (newTaskTitle.trim() === "" || newTaskDescription.trim() === "") {
    alert("Invalid input");
    return;
  }

  let newTaskItem = document.createElement("li");
  newTaskItem.classList.add("task-item", "card-bg", "flex-col", "justify");
  newTaskItem.innerHTML = `
  <div class="task-title flex-row align">
    <h3>
      ${newTaskTitle}
    </h3>
    <h4>
      Created: <span class="created-date">${getDate()}</span>
    </h4>
  </div>
  <p class="task-description">
    ${newTaskDescription}
  </p>
  <button class="mark-complete flex-row align">
    <i class="fa-solid fa-check"></i>
    <h3>Mark Complete</h3>
  </button>`;

  let taskList = document.getElementById("task-list");
  let allTasks = document.querySelectorAll(".task-item");

  !allTasks.length
    ? taskList.appendChild(newTaskItem)
    : taskList.prepend(newTaskItem);

  clearInputFields();
  toggleVisibility(popUpModal);

  let markCompleteButton = newTaskItem.querySelector(".mark-complete");
  markCompleteButton.addEventListener("click", () => {
    newTaskItem.classList.add("hidden");
  });
});
