var tableMaker = {
  headerList: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"],
  createTable: function(daysList) {
  /* Returns a document fragment which display will apend.
   */
    var docFrag = document.createDocumentFragment(),
      tableId = "calendarTable",
      createId = function(month, date) { return "td" + month + "_" + date;};

    var table = eleFunctions.makeElement("table", {id: tableId});
    docFrag.appendChild(table);

    var headerList = this.headerList;

    table.appendChild(this.makeTrWithHeaders(headerList));

    var rows = daysList.length / 7;
    daysList.forEach(function(weekArray) {
      var tr = this.makeRow(weekArray, createId);
      table.appendChild(tr);
    }, this);
      
    return docFrag;
  },

  makeRow: function(weekArray, makeId) {
  // Returns tr element for an entire week.
  // Input: weekArray is an array with date Objects 
  // created by calendar instances.
  //  makeId is a callback function
    var tr = eF.makeElement("tr");
    weekArray.forEach(function(dayObj){ // Makes td for dates
      var id = makeId(dayObj.month, dayObj.date);
      var td = eleFunctions.makeElement("td", {class: "calendar_cell", id: id}, this.makeDateDiv(dayObj.date));
      tr.appendChild(td);
    }, this);
    return tr;
  },
  makeTrWithHeaders: function(headerList) {
  // Used in makeTable function.
    var tr = eF.makeElement("tr");
    each(headerList, function(head, i, list) {
      var th = eF.makeElement("th", {id: head}, head);
      tr.appendChild(th);
    }, this);
    return tr;
  },
  makeDateDiv: function(date) {
    return eleFunctions.makeElement("div", {"class": "date"}, date);
  }
};