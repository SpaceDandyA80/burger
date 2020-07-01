var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burger", function(res){
        cb(res)
    });
  },

  create: function (cols,vals, cb) {
    orm.insertOne("burger", cols, vals, function(res){
        // cb(res);
        console.log(res)
    });
  },
  update: function (objColVals, condition,cb){
    orm.updateOne("burger", objColVals,condition, function(res){
        cb(res);
    });
  }
  ,
  delete: function(idToDelete, cb){
    console.log("we're here")
      orm.deleteById("burger", idToDelete, function(res){
          cb(res);
      })

  }
};

module.exports = burger;

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
  