var display = {
  table: null,
  _menuStatus: false,
  displayMonth(month, tableFrag, tableHandlerRemover) {
    var monthText = eF.getElement("monthText");
    monthText.textContent = this.monthTranslator(month);
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
  createInfoMenu(message) {
    var menu = this.createMenu("infoMenu");
    var div = eF.makeElement("div", {}, message, eF.makeElement("input", {type: "text"}), eF.makeElement("input", {type: "submit"}));

    menu.appendChild(div);
    document.body.appendChild(menu);
  },
  removeInfoMenu() {
    this.removeMenu("infoMenu");
  },
  createMenu(id) {
    if (this._menuStatus == true) {
      this.removeMenu();
    }
    var menu = eF.makeElement("div", {
      class: "menu",
      id: id
    });
    document.body.appendChild(menu);
    this._menuStatus = true;
    return menu;
  },
  removeMenu(id) {
    if (this._menuStatus == true) {
      var menu = document.getElementById(id);
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