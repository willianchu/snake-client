let connection;

// const setupInput = (conn) => {
//   connection = conn;
// };

const setupInput = function(conn) {
  connection = conn;
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
    connection.write("Move: " + "up");
    break;
  case "a":
    connection.write("Move: " + "left");
    break;
  case "s":
    connection.write("Move: " + "down");
    break;
  case "d":
    connection.write("Move: " + "right");
    break;
  case "e":
    connection.write("Say: Humm! A square apple!");  
    break;
  default:
    connection.write("Say: Ops! Wrong key!");
  }
  return key;
};

module.exports = { setupInput };