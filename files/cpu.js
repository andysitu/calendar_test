var cpu = {
  year: 0,
  month: 0,
  date: 0,
  calendar: null,
  run: function() {
    this.setToday();
    this.calendar = new Calendar(this.year);

    this.makeTable();    
  },
  changeMonth(year, month) {
    if (month > 11) {
      this.changeMonth(year + 1, month - 12);
    } else if (month < 0) {
      this.changeMonth(year - 1, 12 + month);
    } else {
      this.month = month;
      this.year = year;
    }
  },
  increaseMonth(value) {
  // Works the same for negative or positive value.
    var month = this.month + value;
    this.changeMonth(this.year, month);
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