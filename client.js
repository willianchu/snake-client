const net = require("net");
const CONSTANT = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: CONSTANT.IP, // IP address here,
    port: CONSTANT.PORT // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};





