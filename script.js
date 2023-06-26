// DOM Elements Selector
const popUpModal = document.getElementById("popup-modal");
const modalCloseButton = document.getElementById("modal-close-button");
const createNewTask = document.getElementById("add-task");

// Step 1: User initiates add task / modal pops up
createNewTask.addEventListener("click", () => {
  clearInputFields();
  toggleVisibility(popUpModal);
});

// Outcome a: user closes modal / did not complete task create
modalCloseButton.addEventListener("click", () => {
  clearInputFields();
  toggleVisibility(popUpModal);
});

// Step 1b: user press F3 instead of clicking the add task button
document.addEventListener("keydown", function (event) {
  if (event.key === "F3") {
    clearInputFields();
    toggleVisibility(popUpModal);
  }
});

const toggleVisibility = (domElement) => {
  domElement.classList.toggle("hidden");
};

// reset modal values
const clearInputFields = () => {
  const modalTaskTitle = (document.getElementById("modal-task-title").value =
    "");
  const modalTaskDescription = (document.getElementById(
    "modal-task-description"
  ).value = "");
};

// retrieve local time
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

//  step 2: create task
let modalTaskSubmit = document.getElementById("modal-task-submit");

// add the created and completed tasks into an array
let taskArr = [];
let taskCount = document.querySelector(".task-count");
taskCount.textContent = taskArr.length;

let completedTasks = document.querySelector(".complete-count");
let completedCounter = 0;
completedTasks.innerText = completedCounter;

// callback function to retrieve user input and convert them into the list
modalTaskSubmit.addEventListener("click", () => {
  let newTaskTitle = document.getElementById("modal-task-title").value;

  let newTaskDescription = document.getElementById(
    "modal-task-description"
  ).value;

  //  input validation / rejects if the fields are empty
  if (newTaskTitle.trim() === "" || newTaskDescription.trim() === "") {
    alert("Invalid input");
    return;
  }

  // dynamically adds a list item into the DOM
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

  taskArr.push(newTaskTitle);
  taskCount.textContent = taskArr.length;

  let taskList = document.getElementById("task-list");
  let allTasks = document.querySelectorAll(".task-item");

  // if there is an existing task, add the latest task to the very top of the list
  !allTasks.length
    ? taskList.appendChild(newTaskItem)
    : taskList.prepend(newTaskItem);

  // step 3: close the modal / reset modal values
  clearInputFields();
  toggleVisibility(popUpModal);

  // optional step 4:removes the selected task / update the completed tasks counter
  let markCompleteButton = newTaskItem.querySelector(".mark-complete");
  markCompleteButton.addEventListener("click", () => {
    taskArr = taskArr.filter((item) => item !== newTaskTitle);
    taskCount.textContent = taskArr.length;
    completedCounter += 1;
    completedTasks.innerText = completedCounter;
    newTaskItem.classList.add("hidden");
  });
});
