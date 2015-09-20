var display = {
  displayMonth(tableFrag) {
    var test = document.getElementById("calendarTable");
    var tableDiv = document.getElementById("tableDiv");
    if (test === null) {
      tableDiv.appendChild(tableFrag);
    } else {
      tableDiv.replaceChild(tableFrag, test);
    }
  }
};