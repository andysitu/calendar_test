var cpu = {
  year: 0,
  month: 0,
  calendar: null,
  run: function() {
    this.calendar = new Calendar();
    var today = this.calendar.getToday();
    this.setToday();

    this.makeTable();    
  },

  makeTable() {
    var tableFragment = this.calendar.makeCalendarArray(this.year, this.month)
    var table = tableMaker.createTable(tableFragment);
    display.displayMonth(table);
  },
  setToday() {
    var today = new Date();

    this.year = today.getFullYear();
    this.month = today.getMonth();
    this.date = today.getDate();
  }
};