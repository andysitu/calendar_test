var display = {
  table: null,
  displayMonth(tableFrag, tableHandlerRemover) {
    this.table = tableFrag.firstChild;
    var test = document.getElementById("calendarTable");
    var tableDiv = document.getElementById("tableDiv");
    if (test === null) {
      tableDiv.appendChild(tableFrag);
    } else {
      tableHandlerRemover(test);
      tableDiv.replaceChild(tableFrag, test);
    }
  },

  select(mnoth, date, status) {
    var selectedTd = document.querySelector("#td" + month + "_" + date);
    if (status === true) {
      selectedTd.classList.add("selected");
    } else {
      selectedTd.classList.remove("selected");
    }
    
  },

  createMenu() {
    var menu = eF.makeElement("div", {
      class: "menu",
      id: "mainMenu"
    }, "TESTING");

    document.body.appendChild(menu);
  },
  removeMenu() {
    var menu = document.getElementById("mainMenu");
    document.body.removeChild(menu);
  }
};