function tester() {
  var test = new Day(2015, 8, 17);
  var assertion = test.date === 17 && test.instance.getDate() === 17
    && test.day === 4;
  console.assert(assertion, test);

  var nextDay = test.makeNextDay();
  assertion = nextDay.date === 18 && nextDay.day === 5;
  console.assert(assertion, nextDay);

  var month = new Month(2015, 8);
  console.assert(month.days.length === 30 && month.days[0].day == 2);

  var year = new Year(2016);
  console.assert(year.months[1].days.length == 29 && year.months.length == 12);
}

