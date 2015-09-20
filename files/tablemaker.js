var tableMaker = {
  headerList: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"],
  createTable: function() {
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
    var tr = this.makeTr();
    each(headerList, function(header, i, headerList) {
      var td = this.makeTd();
      tr.appendChild(td);
    }, this);
    return tr;
  },
  makeTr: function(id) {
  // Returns tr element.
    var tr = this.makeElement("tr", id);
    return tr;
  },
  makeTrWithHeaders: function(headerList) {
  // Used in makeTable function.
    var tr = this.makeTr("Header");
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
  makeDateDiv: function() {
    var date = this.makeElement("div", "");
    date.textContent = "test";
    date.classList.add("date");
    return date;
  },
  makeTh: function(content, id) {
  // Returns an th element.
    var th = this.makeElement("th", id);
    th.textContent = content;
    return th;
  },
  makeElement: eleFunctions.makeElement, 
}