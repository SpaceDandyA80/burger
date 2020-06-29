const connection = require("../config/connection.js");

//function to help sql syntax
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

var orm = {
  // selects all info from sql database
  selectAll: function (tableInput, cb) {
      var queryString = "select * from "+ tableInput + ";";
      connection.query(queryString, function(err,result){
          if (err) throw err;
          cb(result);
      })
  },
  // creates a new bruger to database
  insertOne: function (table, cols, vals, cb) {
      var queryString = "insert into "+ table +" (burger_name) values "+ "('"+vals+"')";
      connection.query(queryString, function(err,result){
          if (err) throw err;
          cb(result);
      });
  },
  // updates aburger from database
  updateOne: function (table, objColVals, condition, cb) {
    cb(result);
  },
  //,
  // delete: function(table, condition,cb){

  // }
};

module.exports = orm;
