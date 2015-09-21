var ui = {
  run: function() {
    eleFunctions.addHandler("nextMonth", "click", this.nextMonth);
    eleFunctions.addHandler("prevMonth", "click", this.prevMonth);
  },

  nextMonth: function(e) {
    console.log("You clicked on next");
  },
  prevMonth: function(e) {
    console.log("You clicked on previous");
  },
  tableClick: function(e) {
    console.log("You clicked on the calendar", e.target);
  }
};
