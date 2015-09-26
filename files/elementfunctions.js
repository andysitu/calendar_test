var eleFunctions = eF = {
  addHandler: function(element, event, handler, status) {
  // Adds an event handler to document by type either
  //  being the id or the element.
    if (status === undefined) { status = false; }
    if (typeof element == 'string') { // element Id
      element = document.getElementById(element);
    } 
    if (typeof element === 'object') { // element node
      element.addEventListener(event, handler, status);
    }
  },

  makeElement: function(type, attributes) {
  // Returns an element and appends an id.
    var element = document.createElement(type);
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        element.setAttribute(attr, attributes[attr]);
      }
    }
    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (typeof child === 'string' || typeof child === 'number')
        child = document.createTextNode(child);
      element.appendChild(child);
    }
    return element;
  },

  getElement: function(id) {
    var element = document.getElementById(id);
    return element;
  },

  append: function(parent, child) {
    if (typeof parent === "string")
      parent = document.getElementById(parent);
    if (typeof child === "string")
      child = document.getElementById(child);

    parent.appendChild(child);
  }
};