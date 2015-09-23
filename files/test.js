function tester() {
  var test = new Day(2015, 8, 17);
  var assertion = test.date === 17 && test.instance.getDate() === 17
    && test.dayOfWeek === 4;
  console.assert(assertion, test);

  var nextDay = test.makeNextDay();
  assertion = nextDay.date === 18 && nextDay.dayOfWeek === 5;
  console.assert(assertion, nextDay);

  var month = new Month(2015, 8);
  console.assert(getLength(month.days) === 30 && month.days[1].dayOfWeek == 2);

  var calendar = new Calendar();
  var month = calendar.getMonthList(2015, 8);
  console.assert(getLength(month) === 30);
  month = calendar.getMonthList(2015, 12);
  onsole.assert(getLength(month) === 31);
  var dayObj = calendar.getDay(2015, 8, 62);
  console.assert(dayObj.date == 1 && dayObj.month == 10);
}

