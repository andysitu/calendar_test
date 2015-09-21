var cpu = {
  year: 0,
  month: 0,
  calendar: null,
  run: function() {
    this.setToday();
    this.calendar = new Calendar(this.year);

    this.makeTable();    
  },

  makeTable() {
    var tableFragment = this.calendar.makeCalendarArray(this.year, this.month);
    var table = tableMaker.createTable(tableFragment);
    display.displayMonth(table, ui.removeTableHandler);
    ui.addTableHandler();
  },
  setToday() {
    var today = new Date();

    this.year = today.getFullYear();
    this.month = today.getMonth();
    this.date = today.getDate();
  },
  processInput(inputType, status) {
    switch(inputType) {
      case "nextMonth":
        console.log("You clicked on next"); break;
      case "prevMonth":
        console.log("You clicked on previous"); break;
      case "clickedTable":
        console.log("You clicked on the calendar", status); break;
    }
  }
};