const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.17.193.35", // IP address here,
    port: "50541"// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};





