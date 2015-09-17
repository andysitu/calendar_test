function Day(year, month, date, content) {
  this.instance = this.getInstance(year, month, date);
  this.date = this.instance.getDate();
  this.month = this.instance.getMonth();
  this.year = this.instance.getFullYear();
  this.day = this.instance.getDay();
}

Day.prototype.getInstance = function(year, month, date) {
  return new Date(year, month, date);
};

Day.prototype.makeNextDay = function() {
  return new Day(this.year, this.month, this.date + 1);
};