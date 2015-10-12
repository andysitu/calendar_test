var stor = {
   _calendars: {},
   getCalObj(name) {
      return this._calendars[name];
   },
   addCal(calendar, name, key) {
   // name is the name of the certain calendar. 
   // key is the keyCode for the corresponding key.
      this._calendars[name] = {
         calendar: calendar,
         key: key
      };
   },
   store(name, obj) {
      localStorage.setItem(name, JSON.stringify(obj));
   },
   get(name) {
      var obj = localStorage.getItem(name);
      return JSON.parse(obj); // null is returned if undefined
   },
   del(name) {
      localStorage.removeItem(name);
   }
};