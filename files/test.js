function tester() {
  var test = new Day(2015, 8, 17);
  var assertion = test.date === 17 && test.instance.getDate() === 17
    && test.dayOfWeek === 4;
  console.assert(assertion, test);

  var nextDay = test.makeNextDay();
  assertion = nextDay.date === 18 && nextDay.dayOfWeek === 5;
  console.assert(assertion, nextDay);

  var month = new Month(2015, 8);
  console.assert(month.days.length === 30 && month.days[0].dayOfWeek == 2);

  var calendar = new Calendar();
  var month = calendar.getMonthList(2015, 8)
  console.assert(month.length === 30)
;}

