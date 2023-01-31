import {
  getInput,
  removeInputForm,
  displayNewProjOnSideBar,
  getInputForTask,
  displayTaskOnContentPage,
  makeUnclickable,
} from "./loadDom";
function projInputHandler() {
  makeUnclickable("addProj");
  getInput();
  removeInputForm("projInputContainer");
  displayNewProjOnSideBar();
}

function taskSubmitBtnHandler() {
  makeUnclickable("addTaskBtn");

  getInputForTask(); //change where input goes
  removeInputForm("taskBtnContainer"); //is good
  displayTaskOnContentPage();
}

export { projInputHandler, taskSubmitBtnHandler };
