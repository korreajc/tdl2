import { addMenuBtnEventListeners } from "./eventListeners";
import { projectItem } from "./taskList";
import { projectList } from "./taskList";
import { taskItem } from "./taskList";
import { makeInputForm, removeChildrenOfAnElement } from "./sharedFunctions.js";

//dom
function changeTitle(name) {
  const defaultTitle = document.getElementById("staticTitle");
  defaultTitle.innerHTML = name;
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
function removeCurrProj() {
  const parent = document.getElementsByClassName("currentProj")[0];
  parent.classList.remove("currentProj");
}

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
  });
}

function taskSubmitBtnHandler() {
  getInputForTask(); //change where input goes
  removeInputForm("taskBtnContainer"); //is good
  displayTaskOnContentPage();
}

//dom
function getInputForTask() {
  let taskName = document.getElementById("inputTaskName").value;
  let newTask = taskItem(taskName);
  let curElement = document.getElementsByClassName("currentProj")[0];
  let currentElement = curElement.getAttribute("id");
  console.log(currentElement - 1);
  projectList[currentElement - 1].projectTaskList.push(newTask);
  console.log(projectList);
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
  });
}

function projInputHandler() {
  getInput();
  removeInputForm("projInputContainer");
  console.log(projectList);
  displayNewProjOnSideBar();
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

//dom

function displayTaskOnContentPage() {
  const parent = document.getElementById("taskContainer");
  //create new div element and name it after the last element pushed into the div.
  const newTaskDiv = document.createElement("div");
  const currentProj = document.getElementsByClassName("currentProj")[0].id;
  console.log(projectList);

  console.log(currentProj);

  const last = projectList[currentProj - 1].projectTaskList.length - 1;
  console.log(last);
  console.log(projectList[currentProj - 1].projectTaskList[last].taskName);
  newTaskDiv.innerHTML =
    projectList[currentProj - 1].projectTaskList[last].taskName;
  parent.appendChild(newTaskDiv);
}

//dom
function displayCurrTasks() {
  const currentProj = document.getElementsByClassName("currentProj")[0].id;
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

export { changeTitle, getNameOfButton, addProject, popUpTaskForm };
