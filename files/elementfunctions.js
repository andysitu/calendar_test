var eleFunctions = {
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

  makeElement: function(type, id) {
  // Returns an element and appends an id.
    var element = document.createElement(type);
    if (typeof id === "string")
      element.id = id;
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