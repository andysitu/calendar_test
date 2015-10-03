function Day(year, month, date) { 
  Object.defineProperty(this, "instance", {
    value: this.getInstance(year, month, date),
    writable: false,
    configurable: true,
    enumerable: false
  });
  this.date = this.instance.getDate();
  this.month = this.instance.getMonth();
  this.year = this.instance.getFullYear();
  this.dayOfWeek = this.instance.getDay();
  this.content = {};
}

Day.prototype.getInstance = function(year, month, date) {
  return new Date(year, month, date);
};

Day.prototype.makeNextDay = function() {
  return new Day(this.year, this.month, this.date + 1);
};

Day.prototype.addContent = function(name, type, content) {
  this.content[name] = {
    type: type,
    content: content
  };
};

Day.prototype.getContent = function() {
  var day = {},
    properties = Object.keys(this);

  properties.forEach(function(prop) {
    day[prop] = this[prop];
  }, this);
  return day;
};