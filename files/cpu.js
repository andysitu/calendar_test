var cpu = {
  currentMonth: 0,
  run: function() {
    calendar = new Calendar();
    var month = calendar.makeCalendarArray(2015, 8)
    var table = tableMaker.createTable(month);
    eleFunctions.append("tableDiv", table);
  }
};