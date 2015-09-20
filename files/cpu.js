var cpu = {
  year: 0,
  month: 0,
  calendar: null,
  run: function() {
    this.calendar = new Calendar();
    var today = this.calendar.getToday();
    this.year = today.year;
    this.month = today.month;

    var month = this.calendar.makeCalendarArray(this.year, this.month)
    var table = tableMaker.createTable(month);
    eleFunctions.append("tableDiv", table);
  }
};