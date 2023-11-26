/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable semi */
const net = require("net");

// establishes a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 3000, // PORT number here,
  });
  conn.on("connect", (data) => {
    console.log(data);
    // code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();