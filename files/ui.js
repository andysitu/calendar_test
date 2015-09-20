var ui = {
  run: function() {
    eleFunctions.addHandler("nextMonth", "click", this.nextMonth);
  },

  nextMonth: function() {
    console.log("You clicked on next");
  }
};
