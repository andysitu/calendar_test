var cpu = {
  year: 0,
  month: 0,
  date: 0,
  calendar: null,
  selected: null, // prop: month, & date
  run: function() {
    this.setToday();
    stor.addCal( new Calendar(this.year), "default" , 68);

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
    var calendarArray = stor.getCal().makeCalendarArray(this.year, this.month);
    var table = tableMaker.createTable(calendarArray);
    display.displayMonth(this.month, table, ui.removeTableHandler);
    ui.addTableHandler();
  },
  setToday() {
    var today = new Date();

    this.year = today.getFullYear();
    this.month = today.getMonth();
    this.date = today.getDate();
  },
  processInput(inputType, status, e) {
    switch(inputType) {
      case "nextMonth":
        this.increaseMonth(1); 
        this.makeTable();
        break;
      case "prevMonth":
        this.increaseMonth(-1); 
        this.makeTable();
        break;
      case "today":
        this.setToday();
        this.makeTable();
        break;
      case "clickedTable":
        this.select(status, this.addMenu, this.removeMenu);
        break;
    }
  },
  select(dateObj, diffFunct, sameFunct) {
  // Input: Obj with prop: month & date
  // sameFunct is run if previously selected is same as current.
  // Otherwise, diffFunct is run.
    var month = dateObj.month,
      date = dateObj.date,
      selected = this.selected;

    this.selected = {
      month: month,
      date: date
    };
    if (selected !== null && selected.month == month && selected.date == date) {
      display.select(month, date, false);
      sameFunct();
    } else {
      if (selected !== null) {
        display.select(selected.month, selected.date, false);
      }
      display.select(month, date, true);
      diffFunct();
    }
  },
  addMenu() {
    display.createMenu();
  },
  removeMenu() {
    display.removeMenu();
  }
};