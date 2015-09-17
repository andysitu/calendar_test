function tester() {
  var test = new Day(2015, 8, 17);
  var instance = test.instance;
  console.assert(test.date === 17);
  console.assert(instance.getDate() === 17);
  console.assert(test.day === 4);
}

