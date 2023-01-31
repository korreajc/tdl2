import { displayNewProjOnSideBar, displayTaskOnContentPage } from "./loadDom";
import {
  getProjInput,
  makeUnclickable,
  getInputForTask,
  removeInputForm,
} from "./helperFunctions";
function projInputHandler() {
  getProjInput();
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
