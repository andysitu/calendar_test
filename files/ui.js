var ui = {
  run: function() {
    eleFunctions.addHandler("nextMonth", "click", this.nextMonth);
    eleFunctions.addHandler("prevMonth", "click", this.prevMonth);
    eleFunctions.addHandler("today", "click", this.today);
  },
  nextMonth: function(e) {
    cpu.processInput("nextMonth");
  },
  prevMonth: function(e) {
    cpu.processInput("prevMonth");
  },
  tableClick: function(e) {
    var id = e.target.id;
    if (/\d{1,2}_\d{1,2}/.test(id)) {
      cpu.processInput("clickedTable", id);
    }
  },
  today: function(e) {
    cpu.processInput("today");
  },
  removeTableHandler(tableElement) {
  // called by cpu.makeTable as higher order function into display 
  // (where it's actually used).
    tableElement.removeEventListener("click", ui.tableClick);
  },
  addTableHandler() {
  // appended to table in cpu.makeTable.
    eleFunctions.addHandler("calendarTable", "click", ui.tableClick);
  }
};
