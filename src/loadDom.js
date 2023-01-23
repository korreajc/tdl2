function createTitle(name, parent) {
  titleDiv = document.createElement("div");
  titleDiv.innerHTML = name;
  titleDiv.classList.add("projectTitle");
  parentElement = document.getElementById(parent);
  parentElement.appendChild(titleDiv);
}
