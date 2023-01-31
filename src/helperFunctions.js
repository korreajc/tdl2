import { removeChildrenOfAnElement, getCurrProj } from "./sharedFunctions";
import { newProjPopUpForm } from "./loadDom";
import { projectItem, projectList, taskItem, allTasksList } from "./taskList";
import { displayCurrTasks } from "./loadDom";

function changeTitle(name) {
  const defaultTitle = document.getElementById("staticTitle");
  defaultTitle.innerHTML = name;
}

function getNameOfButton(id) {
  removeOldProjInfo();
  getClickedProjInfo(id);
  displayCurrTasks();
}

function removeCurrProjClass() {
  const parent = document.getElementsByClassName("currentProj")[0];
  parent.classList.remove("currentProj");
}

function removeCurrTasks() {
  const parent = document.getElementById("taskContainer");
  removeChildrenOfAnElement(parent);
}

function removeOldProjInfo() {
  removeCurrProjClass();
  removeCurrTasks();
}

function getClickedProjInfo(id) {
  const clickedProj = document.getElementById(id);
  clickedProj.classList.add("currentProj");
  changeTitle(clickedProj.innerHTML);
}

function getInputForTask() {
  let taskName = document.getElementById("inputTaskName").value;
  let newTask = taskItem(taskName);
  allTasksList.push(newTask);
  let currentElement = getCurrProj();
  projectList[currentElement - 1].projectTaskList.push(newTask);
}

function getProjInput() {
  let projName = document.getElementById("inputProjName").value;
  let newProj = projectItem(projName);
  projectList.push(newProj);
}

function removeInputForm(id) {
  const formContainer = document.getElementById(id);
  formContainer.remove();
}

//dom
function addProject() {
  let parent = document.getElementById("projectMenu");
  newProjPopUpForm(parent);
}

function makeUnclickable(identifier) {
  const item = document.getElementById(identifier);
  item.classList.add("unclickable");
}

function makeClickable(identifier) {
  const item = document.getElementById(identifier);
  item.classList.remove("unclickable");
}

export {
  getNameOfButton,
  getInputForTask,
  makeClickable,
  makeUnclickable,
  changeTitle,
  removeOldProjInfo,
  getClickedProjInfo,
  getProjInput,
  removeInputForm,
  addProject,
};
