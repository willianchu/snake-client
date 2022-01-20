const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.17.193.35", // IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => { // 01
    console.log(`Server: ${data}`); // you ded cuz you idled
  });

  conn.on("connect", () => { // 02
    console.log("Success!! connected to game server");
    console.log(`Server: ${conn.remoteAddress}:${conn.remotePort}`);
    conn.write("Name: WIL");
  });

};

console.log("Connecting ...");
connect();