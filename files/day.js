function Day(year, month, date, content) {
  this.date = date;
  this.month = month;
  this.year = year;
  this.instance = this.getInstance(year, month, date);
  this.day = this.getDay();
}

Day.prototype.getInstance = function(year, month, date) {
  return new Date(year, month, date);
}

Day.prototype.getDay = function() {
  return this.instance.getDay();
};