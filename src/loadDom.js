import { addMenuBtnEventListeners } from "./eventListeners";
import { allTasksList, projectItem } from "./taskList";
import { projectList } from "./taskList";
import { taskItem } from "./taskList";
import {
  getCurrProj,
  makeInputForm,
  removeChildrenOfAnElement,
} from "./sharedFunctions.js";
import { projInputHandler, taskSubmitBtnHandler } from "./objectHandlers";

//dom
function changeTitle(name) {
  const defaultTitle = document.getElementById("staticTitle");
  defaultTitle.innerHTML = name;
}
function removeCurrProj() {
  const parent = document.getElementsByClassName("currentProj")[0];
  parent.classList.remove("currentProj");
}
//dom
function getNameOfButton(id) {
  const originalName = document.getElementById(id); //gets clicked on
  removeCurrProj();
  removeCurrTasks();
  originalName.classList.add("currentProj");
  displayCurrTasks();
  changeTitle(originalName.innerHTML);
}

//dom
function removeCurrTasks() {
  const parent = document.getElementById("taskContainer");
  removeChildrenOfAnElement(parent);
}

//dom

//dom and js
function popUpTaskForm(parent) {
  let btn = makeInputForm(
    parent,
    "taskBtnContainer",
    "taskName",
    "inputTaskName",
    "Submit",
    "submitTaskBtn"
  );

  btn.addEventListener("click", function () {
    taskSubmitBtnHandler();
    makeClickable("addTaskBtn");
    makeClickable("addProj");
  });
}

//dom
function getInputForTask() {
  let taskName = document.getElementById("inputTaskName").value;
  let newTask = taskItem(taskName);
  allTasksList.push(newTask);
  console.log(allTasksList);
  let currentElement = getCurrProj();
  projectList[currentElement - 1].projectTaskList.push(newTask);
}

//dom
function newProjPopUpForm(parent) {
  let btn = makeInputForm(
    parent,
    "projInputContainer",
    "projName",
    "inputProjName",
    "Submit",
    "submitProjBtn"
  );

  btn.addEventListener("click", function () {
    projInputHandler();
    makeClickable("addProj");
    makeClickable("addTaskBtn");
  });
}

//js

function getInput() {
  let projName = document.getElementById("inputProjName").value;
  let newProj = projectItem(projName);
  projectList.push(newProj);
}

//dom

function removeInputForm(id) {
  const projContainer = document.getElementById(id);
  projContainer.remove();
}

//dom
function addProject() {
  let parent = document.getElementById("projectMenu");
  newProjPopUpForm(parent);
}

//dom
function displayNewProjOnSideBar() {
  const parent = document.getElementById("projectMenu");
  //create new div element and name it after the last element pushed into the div.
  const newProjDiv = document.createElement("div");
  newProjDiv.innerHTML = projectList[projectList.length - 1].projectName;
  newProjDiv.classList.add("menuSections");
  newProjDiv.setAttribute("id", projectList.length);
  parent.appendChild(newProjDiv);
  addMenuBtnEventListeners();
}

function makeUnclickable(identifier) {
  const item = document.getElementById(identifier);
  item.classList.add("unclickable");
}

function makeClickable(identifier) {
  const item = document.getElementById(identifier);
  item.classList.remove("unclickable");
}

//dom

function displayTaskOnContentPage() {
  const parent = document.getElementById("taskContainer");
  //create new div element and name it after the last element pushed into the div.
  const newTaskDiv = document.createElement("div");
  const currentProj = getCurrProj();
  const last = projectList[currentProj - 1].projectTaskList.length - 1;
  newTaskDiv.innerHTML =
    projectList[currentProj - 1].projectTaskList[last].taskName;
  parent.appendChild(newTaskDiv);
}

function displayAllTasks() {
  const parent = document.getElementById("taskContainer");
  removeChildrenOfAnElement(parent);
  for (let i = 0; i < allTasksList.length; i++) {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.innerHTML = allTasksList[i].taskName;
    parent.appendChild(newTaskDiv);
  }
}

//dom
function displayCurrTasks() {
  const currentProj = getCurrProj();
  console.log(currentProj);
  const parent = document.getElementById("taskContainer");

  for (
    let i = 0;
    i < projectList[currentProj - 1].projectTaskList.length;
    i++
  ) {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.innerHTML =
      projectList[currentProj - 1].projectTaskList[i].taskName;
    parent.appendChild(newTaskDiv);
  }
}

export {
  changeTitle,
  getNameOfButton,
  addProject,
  popUpTaskForm,
  getInput,
  removeInputForm,
  displayNewProjOnSideBar,
  getInputForTask,
  displayTaskOnContentPage,
  displayCurrTasks,
  displayAllTasks,
  makeClickable,
  makeUnclickable,
};
