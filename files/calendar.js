function Calendar() {
  this.years = {}; // object containing year instances
  this.today = null; // object containing today's year, month, and date values.
  this.init();
}

Calendar.prototype.init = function() {
  this.makeToday();
  this.makeYear(this.today.year);
};

Calendar.prototype.makeYear = function(year) {
  this.years[year] = new Year(year);
};

Calendar.prototype.makeToday = function() {
  var today = new Date();

  this.today = {
    year: today.getFullYear(), 
    month: today.getMonth(), 
    date: today.getDate()
  };
};

Calendar.prototype.getMonth = function(year, month) {
  return this.years[year].getMonth(month);
};