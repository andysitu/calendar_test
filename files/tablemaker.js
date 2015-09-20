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

    run(function() {
      var tr = tableMaker.makeRow(headerList);
      table.appendChild(tr);
    }, 5);
      
    //addHandler(table, "click", tableSelect.toggleSelected.bind(tableSelect));

    return docFrag;
  },

  makeRow: function(headerList) {
  // Returns tr element and makes it in the order of 
  //  the headerlist. Also, creates the td elements 
  //  and appends it. Tr with headers is made in makeTable.
    var tr = eleFunctions.makeElement("tr");
    each(headerList, function(header, i, headerList) {
      var td = this.makeTd();
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
    var td = this.makeElement("td", id);
    var date = this.makeDateDiv();
    td.appendChild(date);
    return td;
  },
  makeDateDiv: function(date) {
    var dateDiv = this.makeElement("div", "");
    dateDiv.textContent = date;
    dateDiv.classList.add("date");
    return dateDiv;
  },
  makeTh: function(content, id) {
  // Returns an th element.
    var th = this.makeElement("th", id);
    th.textContent = content;
    return th;
  },
  makeElement: eleFunctions.makeElement, 
}