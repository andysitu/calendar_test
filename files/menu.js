var menu = {
  menuTypes: ["infoMenu"],
   _menuStatus: false,
   createInfoMenu(x, y) {
    var menu = this.createMenu("infoMenu");
    menu.style.left = x + "px";
    menu.style.top = y + "px";


    var div = eF.makeElement("tr", {}, eF.makeElement("td", {}, "Enter Info: "), 
      eF.makeElement("td", {}, eF.makeElement("input", {type: "text", id: "info_menu_text"})), 
      eF.makeElement("td", {},  eF.makeElement("input", {id: "submitInfoButton", type: "submit"})));

    menu.appendChild(div);
    display.addMenu(menu);

    ui.submitInfo(); // adds event handler to submit button
  },
  removeInfoMenu() {
    this.removeMenu("infoMenu");
  },
  
  createMenu(id) {
    if (this._menuStatus == true) {
      this.removeMenu(id);
    }
    var menu = eF.makeElement("div", {
      class: "menu",
      id: id
    });
    this._menuStatus = true;
    return menu;
  },
  removeMenu(id) {
    if (this._menuStatus == true) {
      display.removeMenu(id);
      this._menuStatus = false;
    }
  }
};