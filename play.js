const {connect} = require("./client"); //destructuring the connect function from the file that i called

connect(); //calling the function to use when needed








// //   conn.on('end', () => {
// //     console.log('you ded cuz you idled');
// //   });
// //   return conn.on;

//   // interpret incoming data as text

//   conn.on('data', (data) => {
//     console.log(data.toString());
//     conn.end();
//   });
//   conn.on('end', () => {
//     console.log('you ded cuz you idled');
//   });

//   conn.setEncoding("utf8");