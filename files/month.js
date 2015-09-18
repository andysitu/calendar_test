function Month(year, month) {
  var instance = new Date(year, month);
  this.year = instance.getFullYear();
  this.month = instance.getMonth();
  this.days = [];
  this.makeDays();
}

Month.prototype.makeDays = function() {
  for (var date = 1 ; date <= 32 ; date++ ) {
    var day = new Day(this.year, this.month, date);
    if (day.month === this.month) {
      this.days.push(day); 
    } else {
      break;
    }
  }
};

Month.prototype.getContent = function() {
  return this.days.map(function(day) {
    return day.getContent();
  });
};