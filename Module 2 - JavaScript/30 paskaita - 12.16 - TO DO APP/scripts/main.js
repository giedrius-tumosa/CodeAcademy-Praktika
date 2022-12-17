import Element from "./Element.js";
import Task from "./Task.js";
import "./htmlElements.js";
import { createTaskCard } from "./htmlElements.js";

const [formTasks, inputNewTask, btnAddTask, errorOutput] = [
  document.querySelector("#formTasks"),
  document.querySelector("#inputNewTask"),
  document.querySelector(".btnAddTask"),
  document.querySelector(".errorOutput")
];

// Creating delete task button event
let btnDeleteEvent = (btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem(btn.value);
    displayStorage();
  });
};

// FUNCTIONS

// Function to display contents of local storage
let displayStorage = () => {
  const taskDisplay = document.querySelector(".taskDisplay");
  // Reset
  while (taskDisplay.firstChild) {
    taskDisplay.removeChild(taskDisplay.firstChild);
  }

  if (!localStorage.length) {
    const noCardsDisplay = new Element({ tag: "p", text: "No tasks." });
    taskDisplay.append(noCardsDisplay);
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      let taskData = JSON.parse(localStorage.getItem(localStorage.key(i)));
      let newCard = createTaskCard(taskData);
      taskDisplay.append(newCard);
    }
  }
  // need to assign delete event to all delete buttons
  const delButtons = document.querySelectorAll(".btnDeleteTask");
  delButtons.forEach(btn => {
    btnDeleteEvent(btn);
  });

};

// Display existing tasks when page loads
displayStorage();


// Event listeners
formTasks.addEventListener("submit", function (e) {
  e.preventDefault();
  let taskTitle = e.target.elements.inputNewTask.value;
  if (taskTitle !== "") {
    const task = new Task(taskTitle, false);
    displayStorage();
  } else {
    errorOutput.textContent = "";
    const text = document.createTextNode("Don't forget to add the task title.");
    errorOutput.append(text);
  }
});












