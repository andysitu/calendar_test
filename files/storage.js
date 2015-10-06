var stor = {
   _calendars: {},
   getCal(name) {
      return this._calendars[name];
   },
   addCal(calendar, name, key) {
   // name is the name of the certain calendar. 
   // key is the keyCode for the corresponding key.
      this._calendars[name] = {
         calendar: calendar,
         key: key
      };
      this._calendar = calendar;
   }
};