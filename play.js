const {connect} = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const stdin = setupInput();

const handleUserInput = (key) => {
  switch (key) {
  case "\u0003":
    console.log("Thanks for playing snakes!");
    process.exit();
    break;
  case "w":
    console.log("up");
    break;
  case "a":
    console.log("left");
    break;
  case "s":
    console.log("down");
    break;
  case "d":
    console.log("right");
    break;
  default:
    console.log("invalid input");
  }
  return key;
};

stdin.on("data", handleUserInput);

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
