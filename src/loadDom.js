import { addMenuBtnEventListeners } from "./eventListeners";
import { projectItem } from "./taskList";
import { projectList } from "./taskList";
import { taskItem } from "./taskList";

function changeTitle(name) {
  const defaultTitle = document.getElementById("staticTitle");
  defaultTitle.innerHTML = name;
}

function getNameOfButton(id) {
  const originalName = document.getElementById(id);
  removeCurrProj();
  originalName.classList.add("currentProj");
  changeTitle(originalName.innerHTML);
}

function removeCurrProj() {
  const parent = document.getElementsByClassName("currentProj")[0];
  parent.classList.remove("currentProj");
}

function popUpTaskForm(parent) {
  let paren = parent;
  let container = document.createElement("div");
  container.setAttribute("id", "container");

  var name = document.createElement("input");
  name.type = "text";
  name.name = "taskName";
  name.id = "inputTaskName";

  var s = document.createElement("input");
  s.type = "submit";
  s.value = "Submit";
  s.id = "submitProjBtn";
  s.addEventListener("click", function () {
    getInputForTask(); //change where input goes
    removeInputForm(); //is good
  });

  container.appendChild(name);
  container.appendChild(s);
  paren.appendChild(container);
}

function getInputForTask() {
  let taskName = document.getElementById("inputTaskName").value;
  let newTask = taskItem(taskName);
  let curElement = document.getElementsByClassName("currentProj")[0];
  let currentElement = curElement.getAttribute("id");
  console.log(currentElement - 1);
  projectList[currentElement - 1].projectTaskList.push(newTask);
  console.log(projectList);
}

function newProjPopUpForm(parent) {
  let paren = parent;
  let container = document.createElement("div");
  container.setAttribute("id", "container");

  var name = document.createElement("input");
  name.type = "text";
  name.name = "taskName";
  name.id = "inputTaskName";

  var s = document.createElement("input");
  s.type = "submit";
  s.value = "Submit";
  s.id = "submitProjBtn";
  s.addEventListener("click", function () {
    getInput();
    removeInputForm();
    console.log(projectList);
    displayNewProjOnSideBar();
  });

  container.appendChild(name);
  container.appendChild(s);
  paren.appendChild(container);
}

function getInput() {
  let projName = document.getElementById("inputTaskName").value;
  let newProj = projectItem(projName);
  projectList.push(newProj);
}

function removeInputForm() {
  const input = document.getElementById("inputTaskName");
  const button = document.getElementById("submitProjBtn");
  const container = document.getElementById("container");
  input.remove();
  button.remove();
  container.remove();
}

function addProject() {
  let parent = document.getElementById("projectMenu");
  newProjPopUpForm(parent);
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

export { changeTitle, getNameOfButton, addProject, popUpTaskForm };
