const Logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const http = require("http");

let pathOb = path.parse(__filename);
const totalMem = os.totalmem();
const freeMem = os.freemem();

//console.log(`Free Memory: ${freeMem}, Total Memory ${totalMem}`);
//const files = fs.readdirSync("./");

// fs.readdir("./", (err, files) => {
//   if (err) console.error(err);
//   else console.log("Results", files);
// });
//console.log(files);

const logger = new Logger();

//Register a listener
logger.on("messageLogged", arg => {
  console.log(arg);
});
logger.log("Message");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Home");
    res.end();
  }
  if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
// server.on("connection", socket => {
//   console.log("new connection");
// });
server.listen(3000);
console.log("Listening on port 3000");
