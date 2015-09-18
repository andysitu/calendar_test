function Calendar() {
  this.init();
  this.years = {};
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