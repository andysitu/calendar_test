var cpu = {
  year: 0,
  month: 0,
  date: 0,
  calendar: null,
  selected: {}, // prop: month, with dates stored in array
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
        this.increaseMonth(1); 
        console.log(this.month, this.year);
        this.makeTable();
        break;
      case "prevMonth":
        this.increaseMonth(-1); 
        console.log(this.month, this.year);
        this.makeTable();
        break;
      case "today":
        this.setToday();
        this.makeTable();
        console.log(this.month, this.year);
        break;
      case "clickedTable":
        this.select(status); break;
    }
  },
  select(dateObj) {
  // Input: Obj with prop: month & date
    var month = dateObj.month,
      date = dateObj.date,
      selected = this.selected;

    if (!Array.isArray(selected[month])) {
      selected[month] = []; }

    var index = selected[month].indexOf(date),
      status = index < 0;
    if (index < 0) {
      selected[month].push(date);
    } else {
      selected[month].splice(index, 1);
    }
    display.select(month, date, status);
  }
};