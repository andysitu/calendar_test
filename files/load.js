function loadIt() {
  var table = tableMaker.createTable();
  elementFunctions.append("tableDiv", table);
}

window.addEventListener("load", loadIt);
load = null;