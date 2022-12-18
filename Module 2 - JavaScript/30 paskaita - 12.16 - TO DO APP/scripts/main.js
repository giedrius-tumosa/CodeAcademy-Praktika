import Element from "./Element.js";
import Task from "./Task.js";
// import "./htmlElements.js";
import { createTaskCard, createTaskTitleForm } from "./htmlElements.js";

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


// Funkcija keisti local storage data
//Sukurti naujai atsiradusiai formai isjungimo mygtuka, jei nebenorima editint.

// Function to edit storage data
let editStorageData = (taskID, keyToEdit, newValue) => {
  const tempObj = JSON.parse(localStorage.getItem(taskID));
  console.log(tempObj);
  tempObj[keyToEdit] = newValue;
  localStorage.setItem(taskID, JSON.stringify(tempObj));
};

// Save changes event: saves new task title to storage.
let btnSaveChangesEvent = (titleEditForm) => {
  titleEditForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const [newTitle, taskID] = [
      e.target.elements.inputEditTitle.value,
      titleEditForm.closest(".taskCard").id.slice(2)
    ];
    // If prevents empty string
    if (newTitle) {
      editStorageData(taskID, "title", newTitle);
    }
    displayStorage();
  });
};

let btnCancelEdit = (btn) => {
  btn.addEventListener("click", function (e) {
    btn.parentNode.remove();
  });
};


// Edit event: creates edit task title form
let btnEditEvent = (btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const taskCard = btn.closest(".taskCard");
    const textArea = taskCard.querySelector(".textArea");
    // Prevent editing if task is complete

    if (taskCard.querySelector("#markComplete").checked) {
      return;
    }

    // Reset
    textArea.childNodes.forEach(el => {
      if (el.id === "titleEditForm") textArea.removeChild(el);
    });

    const taskTitleForm = createTaskTitleForm();
    textArea.append(taskTitleForm);
    btnSaveChangesEvent(taskTitleForm);

    taskTitleForm.childNodes.forEach(el => {
      if (el.id === "btnCancelEdit") {
        btnCancelEdit(el);
      }
    });


  });
};

// Mark complete event
let markCompleteEvent = (btn) => {
  console.dir(btn);
  btn.addEventListener("change", function (e) {
    e.preventDefault();
    const taskCard = btn.closest(".taskCard");
    const taskHeading = taskCard.querySelector(".taskCard_heading");
    const taskID = taskCard.id.slice(2);
    if (btn.checked) {
      editStorageData(taskID, "isCompleted", true);
      taskHeading.style.textDecoration = "line-through";
    } else {
      editStorageData(taskID, "isCompleted", false);
      taskHeading.style.textDecoration = "none";
    }
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
    const noCardsDisplay = new Element({ tag: "p", text: "No tasks have been listed." });
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
  const editButtons = document.querySelectorAll(".btnEditTask");
  editButtons.forEach(btn => {
    btnEditEvent(btn);
  });
  const markCompleteButtons = document.querySelectorAll("#markComplete");
  markCompleteButtons.forEach(btn => {
    markCompleteEvent(btn);
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

// 








