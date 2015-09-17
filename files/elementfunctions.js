var elementFunctions = {
  addHandler: function(type, event, handler) {
  // Adds an event handler to document by type either
  //  being the id or the element.
    if (typeof type == 'string') { // element Id
      var element = document.getElementById(type);
      element.addEventListener(event, handler);
    } else if (typeof type == 'object') { // element node
      type.addEventListener(event, handler);
    }
  },

  createElement: function(type, id) {
  // Returns an element and appends an id.
    if (id === undefined)
      id = "";
    var element = document.createElement(type);
    element.id = id;
    return element;
  },

  getElement: function(id) {
    var element = document.getElementById(id);
    return element;
  },

  addHandler: function(type, event, handler) {
  // Adds an event handler to document by type either
  //  being the id or the element.
    if (typeof type == 'string') { // element Id
      var element = document.getElementById(type);
      element.addEventListener(event, handler);
    } else if (typeof type == 'object') { // element node
      type.addEventListener(event, handler);
    }
  },

  append: function(parent, child) {
    if (typeof parent === "string")
      parent = document.getElementById(parent);
    if (typeof child === "string")
      child = document.getElementById(child);

    parent.appendChild(child);
  }
}