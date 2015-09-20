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

Calendar.prototype.getMonthList = function(year, month) {
// Returns array of objects of days containing values
// getsMonth gets the mon instance.
  return (this.getMonth(year, month)).getMonthList()
};

Calendar.prototype.getDay = function(year, month, date) {
  var length;
  if (date <= 0) {
    length = this.getMonthLength(year, --month);
    date = length + date;
    return this.getDay(year, month, date);
  } else if (date > 28) {
    length = this.getMonthLength(year, month);
    if (date > length) {
      date = date - length;
      month++;
      return this.getDay(year, month, date);
    }
  }
  return this.getMonth(year, month).getDay(date);
}

Calendar.prototype.getMonth = function(year, month) {
// Returns month instances. Uses makeYear because by
// adjusting for month, it might get a year that doesn't
// exist yet.
  if (month < 0) {
    return this.getMonth(year - 1, 12 - month);
  } else if (month > 11) {
    return this.getMonth(year + 1, 12 - month);
  }
  if (!(year in this.years)) {
    this.makeYear(year);
  }
  return this.years[year][month];  
};

Calendar.prototype.makeCalendarArray = function(year, month) {
  var daysList = this.getMonthList(year, month);
  var firstDayOfWeek = daysList[0].dayOfWeek;
  var prevMonthDays = this.getPrevMonthDays(year, month, firstDayOfWeek);
  daysList = prevMonthDays.concat(daysList);
  var amount = 7 - daysList.length % 7;
  array = [];
  run(function(i) {
    array.push(this.getDay(year, month + 1, i));
  }, amount + 1, 1, 1, this);
  daysList = daysList.concat(array);
  return daysList;
};

Calendar.prototype.getPrevMonthDays = function(year, month, firstDayOfWeek) {
// firstDayOfWeek refers to the current month. Want to get the days before that
// date to complete the entire week.
  var negativeDayValues = range(firstDayOfWeek - 1, -1, -1).map(function(value){ return -value; });
  return this.getDays(year, month, negativeDayValues);
};

Calendar.prototype.getDays = function(year, month, datesArray) {
  datesArray = datesArray.map(function(date) {
    return this.getDay(year, month, date);
  }, this);
  return datesArray;
};

Calendar.prototype.getMonthLength = function(year, month) {
// Gets the length of the months list in a month instance.
  return this.getMonth(year, month).getLength();
};