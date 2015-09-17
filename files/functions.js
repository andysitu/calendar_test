function each(obj, callback, context) {
// each function for both objects & arrays.
  if (context === undefined)
    context = window;

  if (Object.prototype.toString.call(obj) == '[object Object]') {
    for (var key in obj) {
      callback.call(context, obj[key], key, obj);
    }
  } else if (Object.prototype.toString.call(obj) == '[object Array]') {
    obj.forEach(callback, context);
  } else { throw "each was given a non-object"; }
}

function map(obj, callback, context) {
// map function for both objects & arrays.
  if (context === undefined)
    context = window;
  var newObj = null;
  if (Object.prototype.toString.call(obj) == '[object Object]') {
    newObj = {};
    each(obj, function(value, key, obj) {
      newObj[key] = callback.call(context, value, key, obj);
    }, context);

    return newObj;
  } else if (Object.prototype.toString.call(obj) == '[object Array]') {
    return obj.map(callback, context);
  } else { throw "map was given a non-object"; }
  }

function run(callback, end, start, increment, context) {
// Runs a function x number of times (end).
// Additional parameters changes the for loop.
  if (start === undefined)
    start = 0;
  if (increment === undefined)
    increment = 1;

  if (increment >= 1 && start <= end) {
    for (var i = start; i < end; i += increment) {
      callback.call(context, i);
    }
  } else if (increment <= -1 && start >= end) {
    for (var i = start; i > end; i += increment) {
      callback.call(context, i);
    }
  } else { throw "Error with run"; }
}