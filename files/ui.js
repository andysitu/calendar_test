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
    cpu.processInput("clickedTable", e.target);
  },
  today: function(e) {
    cpu.processInput("today");
  },
  removeTableHandler(tableElement) {
    tableElement.removeEventListener("click", ui.tableClick);
  },
  addTableHandler() {
    eleFunctions.addHandler("calendarTable", "click", ui.tableClick);
  }
};
