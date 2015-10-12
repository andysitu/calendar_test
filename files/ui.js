var ui = {
  run: function() {
    eleFunctions.addHandler("nextMonth", "click", this.nextMonth);
    eleFunctions.addHandler("prevMonth", "click", this.prevMonth);
    eleFunctions.addHandler("today", "click", this.today);
    document.addEventListener("keydown", function(e) {
      ui.keypressed(e.keyCode); 
    });
  },
  nextMonth: function(e) {
    cpu.nextMonth();
  },
  prevMonth: function(e) {
    cpu.prevMonth();
  },
  tableClick: function(e) {
    var id = e.target.id;
    var idMatch = id.match(/td(\d{1,2})_(\d{1,2})/);
    // test if user clicked on dates on calendar.
    if (idMatch) {
      // idMatch[1] is for the month, [2] is for date
      cpu.clickedDate(idMatch[1], idMatch[2], e.clientX, e.clientY);
    }
  },
  today: function(e) {
    cpu.today("today");
  },
  removeTableHandler(tableElement) {
  // called by cpu.makeTable as higher order function into display 
  // (where it's actually used).
    tableElement.removeEventListener("click", ui.tableClick);
  },
  addTableHandler() {
  // appended to table in cpu.makeTable.
    eleFunctions.addHandler("calendarTable", "click", ui.tableClick);
  },
  submitInfo: function() {
    var button = document.getElementById("submitInfoButton");
    var text = document.getElementById("info_menu_text");
    button.addEventListener("click", function(e) { 
      cpu.addInfo(text.value); 
      text.value = ""; 
    });
  },
  keypressed(key) {
    switch(key) {
      case 27: //esc key
        cpu.escKeypressed(); break;
      case 37: // left key
        break;
      case 38: // up key
        break;
      case 39: // right key
        break;
      case 40: // down key
        break;
    }
  }
};
