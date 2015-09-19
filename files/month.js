function Month(year, month) {
  var instance = new Date(year, month);
  this.year = instance.getFullYear();
  this.month = instance.getMonth();
  this.days = {};
  this.makeDays();
}

Month.prototype.makeDays = function() {
  for (var date = 1 ; date <= 32 ; date++ ) {
    var day = new Day(this.year, this.month, date);
    if (day.month === this.month) {
      this.days[date] = (day); 
    } else {
      break;
    }
  }
};

Month.prototype.getMonth = function() {
  return map(this.days, function(_, date) {
    return this.getDay(date);
  }, this);
};

Month.prototype.getDay = function(date) {
  var monthLength = getLength(this.days);
  if (date <= 0) {
    date = monthLength - date;
  } else if (date > monthLength) {
    date = date - monthLength;
  }
  return this.days[date].getContent();
};

Month.prototype.getLength = function() {
  return getLength(this.days);
}