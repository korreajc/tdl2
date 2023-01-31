function removeChildrenOfAnElement(parent) {
  var child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
}

function makeInputForm(
  parentContainer,
  containerId,
  formName,
  formId,
  btnValue,
  btnId
) {
  let paren = parentContainer;
  let container = document.createElement("div");
  container.setAttribute("id", containerId);
  //input form
  var form = document.createElement("input");
  form.type = "text";
  form.name = formName;
  form.id = formId;
  //btn
  var btn = document.createElement("input");
  btn.type = "submit";
  btn.value = btnValue;
  btn.id = btnId;

  container.appendChild(form);
  container.appendChild(btn);
  paren.appendChild(container);

  return btn;
}

export { removeChildrenOfAnElement, makeInputForm };
