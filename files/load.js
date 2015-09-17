function loadIt() {
  var tableDiv = elementFunctions.getElement("tableDiv");
  var table = tableMaker.createTable();
  tableDiv.appendChild(table);
}

window.addEventListener("load", loadIt);
load = null;