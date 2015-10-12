var menu = {
   _menuStatus: false,
   createInfoMenu(x, y) {
    var menu = this.createMenu("infoMenu");
    menu.style.left = x + "px";
    menu.style.top = y + "px";
    var div = eF.makeElement("div", {}, "Enter Info: ", eF.makeElement("input", {type: "text"}), 
      eF.makeElement("input", {id: "infoSubmit", type: "submit"}));

    menu.appendChild(div);
    display.addMenu(menu);
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