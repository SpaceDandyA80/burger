const orm = require("../config/orm.js");

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
  //,
  //delete: function(cb){

  //}
};

module.exports = burger;
