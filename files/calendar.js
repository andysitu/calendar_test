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
  var yearArray = [];
  run(function(month){
    yearArray.push(new Month(year, month ));
  }, 12);
  this.years[year] = yearArray;
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
  if (!(year in this.years)) {
    this.makeYear(year);
  }
  return this.years[year][month].getMonth();  
};