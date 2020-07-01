const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(data){
        var burgObject = {
            burger: data
        };
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create(req.body.newBurger, function(
        result
    ){
        console.log(result)
        res.redirect("/");
    }

    );

});

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
  
    burger.update(
      {
        id: req.body.id,
      },
      condition,
      function (result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
});

router.delete("/api/burgers/:id", function (req, res) {

    console.log("condition", condition);
    burger.delete(
      {
        id: req.params.id,
      },
      condition,
      function (result) {
        if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });

  // Export routes for server.js to use.
module.exports = router;