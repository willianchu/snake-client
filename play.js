const {connect} = require("./client");
const {setupInput} = require("./input");


const stdin = setupInput();

console.log("Connecting ...");
const conn = connect();

conn.on("data", (data) => { // 01
  console.log(`Server: ${data}`); // you ded cuz you idled
});

conn.on("connect", () => { // 02
  console.log("Success!! connected to game server");
  console.log(`Server: ${conn.remoteAddress}:${conn.remotePort}`);
  conn.write("Name: CHU");
});
