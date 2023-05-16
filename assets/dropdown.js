// import { ODArray } from "./constant.js";

{
  /* <input type="number" id="outsideDiameterSurface" />
    <label for="outsideDiameterSurface">OD(in)</label> */
}

function onClickToogleShowFunction(element) {
  element.classList.toggle("show");
}

function ODDropdown() {
  const parent = document.getElementById("od-dropdown-surface");

  const parentDropdown = document.createElement("div");
  const buttonDropdown = document.createElement("button");

  buttonDropdown.classList.add("dropbtn");
  parentDropdown.setAttribute("id", "surface-od-dropdown");

  buttonDropdown.addEventListener(
    "click",
    onClickToogleShowFunction(parentDropdown)
  );

  ODArray.forEach((text) => {
    const childLink = document.createElement("div");
    const textnode = document.createTextNode(text.name);
    childLink.appendChild(textnode);
    childLink.href = text.href;
    parent.appendChild(childLink);
  });

  parent.appendChild(buttonDropdown);
  parent.appendChild(parentDropdown);
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
