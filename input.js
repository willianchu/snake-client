
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

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

module.exports = { setupInput };