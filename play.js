const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
//   conn.on('end', () => {
//     console.log('you ded cuz you idled');
//   });
//   return conn.on;

  // interpret incoming data as text

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('end', () => {
    console.log('you ded cuz you idled');
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();