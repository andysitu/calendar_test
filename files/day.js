function Day(date, month, year) {
  this.date = date;
  this.month = month;
  this.year = year;
  this.dateInstance = this.getInstance(date, month, year);
}

Day.prototype.getInstance = function(date, month, year) {
  return new Date(year, month, date);
}
