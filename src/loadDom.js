import { addMenuBtnEventListeners } from "./eventListeners";
import { allTasksList } from "./taskList";
import { projectList } from "./taskList";
import {
  getCurrProj,
  makeInputForm,
  removeChildrenOfAnElement,
} from "./sharedFunctions.js";
import { projInputHandler, taskSubmitBtnHandler } from "./objectHandlers";
import { makeClickable } from "./helperFunctions";

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
  popUpTaskForm,
  displayNewProjOnSideBar,
  displayTaskOnContentPage,
  displayCurrTasks,
  displayAllTasks,
  newProjPopUpForm,
};
