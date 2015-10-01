var display = {
  table: null,
  _menuStatus: false,
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
    if (this._menuStatus == true) {
      this.removeMenu();
    }
    var menu = eF.makeElement("div", {
      class: "menu",
      id: "mainMenu"
    }, "TESTING");

    document.body.appendChild(menu);
    this._menuStatus = true;
    return menu;
  },
  removeMenu() {
    if (this._menuStatus == true) {
      var menu = document.getElementById("mainMenu");
      document.body.removeChild(menu);
      this._menuStatus = false;
    }
  },
  monthTranslator(month) {
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    if (months[month] !== undefined)
      return months[month];
    else if (months.indexOf(month) >= 0){
      return months.indexOf(month);
    } else {
      throw new Error("monthTranslator was given " + month);
    }
  }
};