var display = {
  displayMonth(tableFrag, handlerFunctionToRemove) {
    var test = document.getElementById("calendarTable");
    var tableDiv = document.getElementById("tableDiv");
    if (test === null) {
      tableDiv.appendChild(tableFrag);
    } else {
      test.removeEventListener("click", handlerFunctionToRemove);
      tableDiv.replaceChild(tableFrag, test);
    }
  }
};