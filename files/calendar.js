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
    yearArray.push( this.makeMonth(year, month) );
  }, 12, 0, 1, this);
  this.years[year] = yearArray;
};

Calendar.prototype.makeMonth = function(year, month) {
  return new Month(year, month );
}

Calendar.prototype.makeToday = function() {
  var today = new Date();

  this.today = {
    year: today.getFullYear(), 
    month: today.getMonth(), 
    date: today.getDate()
  };
};

Calendar.prototype.getMonth = function(year, month) {
  if (month < 0) {
    return this.getMonth(year - 1, 12 - month);
  } else if (month > 11) {
    return this.getMonth(year + 1, 12 - month);
  }
  if (!(year in this.years)) {
    this.makeYear(year);
  }
  return this.years[year][month].getMonth();  
};