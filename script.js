// DOM Elements Selector
const popUpModal = document.getElementById("popup-modal");
const taskList = document.querySelectorAll(".task-item");
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

{
  /* <li class="task-item card-bg flex-col justify">
  <div class="task-title flex-row align">
    <h3>
      Task Title: <span>Title</span>
    </h3>
    <h4>
      Created: <span class="created-date">Jun 22, 2023</span>
    </h4>
  </div>
  <p class="task-description">
    Task Description: This is where the extra notes are!
  </p>
  <button class="mark-complete flex-row align">
    <i class="fa-solid fa-check"></i>
    <h3>Mark Complete</h3>
  </button>
</li>; */
}
