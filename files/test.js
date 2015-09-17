function tester() {
  var test = new Day(2015, 8, 17);
  var assertion = test.date === 17 && test.instance.getDate() === 17
    && test.day === 4;
  console.assert(assertion, test);

  var nextDay = test.makeNextDay();
  assertion = nextDay.date === 18 && nextDay.day === 5;
  console.assert(assertion, nextDay);
}

