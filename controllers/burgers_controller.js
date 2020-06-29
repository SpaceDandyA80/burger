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
    burger.update(

    );
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function (result) {
     
    });
  });

  // Export routes for server.js to use.
module.exports = router;