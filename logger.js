const EventEmitter = require("events");

let url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //Send http request
    console.log(message);
    //Raise event
    this.emit("messageLogged", { id: 1, url: url });
  }
}

module.exports = Logger;
