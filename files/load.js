function loadIt() {
  var table = tableMaker.createTable();
  elementFunctions.append("tableDiv", table);

  tester();
}

window.addEventListener("load", loadIt);
load = null;