const connection = require("../config/connection.js");

//function to help sql syntax
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
  
    for (var key in ob) {
        console.log("I made it here");
      arr.push(key + "=" + ob[key]);
      console.log("KEY: " + key);
      console.log(ob);
      console.log(arr);

    }

    console.log(arr.toString());
    return arr.toString();
  }


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
  insertOne: function (table, vals, cb) {

      var queryString = "insert into "+ table +" (burger_name) values "+ "('"+vals+"')";
      console.log(queryString);
      connection.query(queryString, function(err,result){
          if (err) throw err;
          cb(result);
      });
  },
  // updates aburger from database
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      
      cb(result);
    });
  },

  delete: function(table, idToDelete, cb){

    console.log("idToDelete")
    let queryString = "delete from "+table+" where id = "+idToDelete+";";
    connection.query(queryString, (err, result)=>{
      if (err) throw err;
      console.log(queryString)
      cb(result);
    })
  }
};

module.exports = orm;
