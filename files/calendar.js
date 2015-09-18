function Calendar() {
  this.init();
  this.years = {};
}

Calendar.prototype.init = function() {
  var today = new Date();
  var year = today.getFullYear();
  this.makeYear(year);
};

Calendar.prototype.makeYear = function(year) {
  this.years[year] = new Year(year);
};