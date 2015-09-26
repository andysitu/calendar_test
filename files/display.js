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

  select(month, date, status) {
    var selectedTd = document.querySelector("#td" + month + "_" + date);
    if (status === true) {
      selectedTd.classList.add("selected");
    } else {
      selectedTd.classList.remove("selected");
    }
  },

  createMenu() {
    var height = 200,
      width = 400;

    var menu = eF.makeElement("div", {
      class: "menu",
    }, "TESTING");

    menu.style.height = height;
    menu.style.width = width;

    document.body.appendChild(menu);
  }
};