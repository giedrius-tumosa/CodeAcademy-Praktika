import Element from "./Element.js";

const toDoApp = document.querySelector("#toDoApp");

const header = new Element(
  {
    tag: `header`,
    text: "TASK MANAGER",
    attributes: { class: "header" },
    nested: []
  }
);

const aside = new Element(
  {
    tag: `aside`,
    attributes: { class: "aside" },
    nested: [
      {
        tag: `div`,
        attributes: { class: "controlPanel" },
        nested: [
          {
            tag: `h2`,
            text: `Create Your To-Do List`,
            attributes: { class: "controlPanel_heading" },
          },
          {
            tag: `form`,
            attributes: { id: "formTasks" },
            nested: [
              {
                tag: `div`,
                attributes: { class: "inputNewTaskDiv" },
                nested: [
                  {
                    tag: `label`,
                    text: `Enter a new task: `,
                    attributes: { for: "inputNewTask" },
                  },
                  {
                    tag: `input`,
                    attributes: { id: "inputNewTask", name: "inputNewTask", type: "text" },
                  }
                ]
              },
              {
                tag: `div`,
                attributes: { class: "btnAddTaskDiv" },
                nested: [
                  {
                    tag: `button`,
                    text: `Add Task`,
                    attributes: { class: "btnAddTask" }
                  }
                ]
              }
            ]
          },
          {
            tag: `p`,
            attributes: { class: "errorOutput" },
          }
        ]
      }
    ]
  }
);

const main = new Element(
  {
    tag: `main`,
    attributes: { class: "main" },
    nested: [
      {
        tag: `section`,
        attributes: { class: "taskManagement" },
        nested: [
          {
            tag: `h2`,
            text: `Manage Your Tasks`,
            attributes: { class: "taskManagement_heading" },
          },
          {
            tag: `div`,
            attributes: { class: "taskDisplay" },
          }
        ]
      }
    ]
  }
);


export let createTaskCard = (task) => {
  const taskCard = new Element(
    {
      tag: `div`,
      attributes: { class: "taskCard" },
      nested: [
        { //text div
          tag: `div`,
          attributes: { class: "textArea" },
          nested: [
            {
              tag: `h4`,
              text: task.title,
              attributes: { class: "taskCard_heading" },
            }
          ]
        },
        { //button div
          tag: `div`,
          attributes: { class: "buttonArea" },
          nested: [
            { //edit button
              tag: `button`,
              text: `Edit`,
              attributes: { type: "button", class: "btnEditTask" },
            },
            { //delete button
              tag: `button`,
              text: `Del`,
              attributes: { type: "button", class: "btnDeleteTask", value: task.id },
            }
          ]
        }
      ]
    }
  );
  return taskCard;
};







toDoApp.append(header, aside, main);
// document.querySelector(".taskDisplay").append(newCard);