// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection(
//   host: "localhost",
//   port: 3306,
//   user: "nhee559z3lgndqyd",
//   password: "c9g7au0iuk3n0jof",
//   database: "u4zwrmybt5hzkeny",
process.env.JAWSDB_URL
);

// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
