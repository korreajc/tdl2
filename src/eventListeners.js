import { getNameOfButton, addProject } from "./loadDom";
import { popUpTaskForm } from "./loadDom";

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
    addProject();
  });
}

function addTaskBtnEventListener() {
  let btn = document.getElementById("addTaskBtn");
  let parent = btn.parentNode;
  btn.addEventListener("click", function () {
    popUpTaskForm(parent);
  });
}

function addEventListeners() {
  addMenuBtnEventListeners();
  addProjectBtnEventListener();
  addTaskBtnEventListener();
}

export {
  addEventListeners,
  addProjectBtnEventListener,
  addMenuBtnEventListeners,
};
