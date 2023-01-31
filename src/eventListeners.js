import { popUpTaskForm, displayCurrTasks } from "./loadDom";
import { displayAllTasks } from "./loadDom";
import { getNameOfButton } from "./helperFunctions";
import { makeUnclickable, addProject, changeTitle } from "./helperFunctions";

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
