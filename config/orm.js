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
    arr.push(key + " = " + ob[key]);
    //   console.log("KEY: " + key);
    //   console.log("OB: "+ ob);
    //   console.log("Array:" + arr);
  }

  console.log(arr.toString());
  return arr.toString();
}

var orm = {
  // selects all info from sql database
  selectAll: function (tableInput, cb) {
    var queryString = "select * from " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // creates a new bruger to database
  insertOne: function (table, vals, cb) {
    var queryString =
      "insert into " + table + " (burger_name) values " + "('" + vals + "')";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
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
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  deleteById: function (table, id, cb) {
    var queryString = "delete from " + table;

    queryString += " where id = ";
    queryString += id;
    //delete from burger where id = 26;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result)
      cb(result);
    });
  },
};

module.exports = orm;



// router.put("/burgers/:id", function(req, res) {
//     burger.update(req.params.id, function(result) {
//       // wrapper for orm.js that using MySQL update callback will return a log to console,
//       // render back to index with handle
//       console.log(result);
//       // Send back response and let page reload from .then in Ajax
//       res.sendStatus(200);
//     });
//   });
//    update: function(table, objColVals, condition, cb) {
//       var queryString = "UPDATE " + table;
  
//       queryString += " SET ";
//       queryString += objToSql(objColVals);
//       queryString += " WHERE ";
//       queryString += condition;
  
//       console.log(queryString);
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//   postgresql
  
