import { getNameOfButton, addProject, changeTitle } from "./loadDom";
import { popUpTaskForm, displayCurrTasks } from "./loadDom";
import { projectItem, projectList } from "./taskList";
import { displayAllTasks, makeUnclickable } from "./loadDom";
function addMenuBtnEventListeners() {
  document.querySelectorAll("div.menuSections").forEach((item) => {
    item.addEventListener("click", (e) => {
      getNameOfButton(e.target.id);
    });
  });
}

function addProjectBtnEventListener() {
  let btn = document.getElementById("addProj");
  btn.addEventListener("click", function () {
    makeUnclickable("addProj");
    makeUnclickable("addTaskBtn");

    addProject();
  });
}

function addAllTasksListener() {
  let allTasks = document.getElementById("allTasks");
  allTasks.addEventListener("click", function () {
    displayAllTasks();
    changeTitle("All Tasks");
  });
}

function addTaskBtnEventListener() {
  let btn = document.getElementById("addTaskBtn");
  let parent = btn.parentNode;
  btn.addEventListener("click", function () {
    makeUnclickable("addTaskBtn");
    makeUnclickable("addProj");

    popUpTaskForm(parent);
  });
}

function addEventListeners() {
  displayCurrTasks();
  addAllTasksListener();
  addMenuBtnEventListeners();
  addProjectBtnEventListener();
  addTaskBtnEventListener();
}

export {
  addEventListeners,
  addProjectBtnEventListener,
  addMenuBtnEventListeners,
};
