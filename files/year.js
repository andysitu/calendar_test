function Year(year) {
  this.year = year;
  this.months = [];
  this.makeMonths();
}

Year.prototype.makeMonths = function() {
  for (var month = 0; month < 12; month++) {
    this.months.push(new Month(this.year, month ));
  }
}

Year.prototype.getContent = function(month) {
  return this.months[month].getContent();
};