const {connect} = require("./client");
const {setupInput} = require("./input");
const {sliding} = require("./sliding");


console.log("Connecting ...");
const conn = connect();
const stdin = setupInput(conn);

conn.on("data", (data) => { // 01
  console.log(`Server: ${data}`); // you ded cuz you idled
});

conn.on("connect", () => { // 02
  console.log("Success!! connected to game server");
  console.log(`Server: ${conn.remoteAddress}:${conn.remotePort}`);
  for (let i = 0; i < 109; i++) {
    setTimeout(() => conn.write(sliding(i)), i * 700);
  }
});
