var tableMaker = {
  headerList: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"],
  createTable: function(daysList) {
  /* Returns a document fragment which display will apend.
   */
    var docFrag = document.createDocumentFragment(),
      tableId = "calendar";

    var table = eleFunctions.makeElement("table", tableId);
    docFrag.appendChild(table);

    var headerList = this.headerList;

    table.appendChild(this.makeTrWithHeaders(headerList));

    var rows = daysList.length / 7;
    daysList.forEach(function(weekArray) {
      var tr = this.makeRow(weekArray);
      table.appendChild(tr);
    }, this);
      
    //addHandler(table, "click", tableSelect.toggleSelected.bind(tableSelect));

    return docFrag;
  },

  makeRow: function(weekArray) {
  // Returns tr element for an entire week.
  // Input: weekArray is an array with date Objects 
  // created by calendar instances.
    var tr = eleFunctions.makeElement("tr");
    weekArray.forEach(function(dayObj){
      var td = eleFunctions.makeElement("td");
      var dateDiv = this.makeDateDiv(dayObj.date);
      td.appendChild(dateDiv);
      tr.appendChild(td);
    }, this);
    return tr;
  },
  makeTrWithHeaders: function(headerList) {
  // Used in makeTable function.
    var tr = eleFunctions.makeElement("tr", "Header");
    each(headerList, function(head, i, list) {
      var th = this.makeTh(head);
      tr.appendChild(th);
    }, this);
    return tr;
  },
  makeTd: function(content, id) {
  // Returns td element.
    var td = eleFunctions.makeElement("td", id);
    var date = this.makeDateDiv();
    td.appendChild(date);
    return td;
  },
  makeDateDiv: function(date) {
    var dateDiv = eleFunctions.makeElement("div", "");
    dateDiv.textContent = date;
    dateDiv.classList.add("date");
    return dateDiv;
  },
  makeTh: function(content, id) {
  // Returns an th element.
    var th = eleFunctions.makeElement("th", id);
    th.textContent = content;
    return th;
  }
};