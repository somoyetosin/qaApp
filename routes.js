'use strict';

var express = require("express");
var router = express.Router();

//GET /questions
//routes for questions collections
router.get("/", function(req, res){
    //Returning all questions
    res.json({response: "You sent me a GET request"});
});

//POST /questions
//routes for creating questions
router.post("/", function(req, res){
    //Returning all questions
    res.json({
        response: "You sent me a POST request",
        body: req.body
    });
});

//GET /questions/:qID
//routes for specific question
router.get("/:qID", function(req, res){
    res.json({
        response: "You sent me a GET request for ID" + req.params.qID
    });
});

//DELETE /questions/:qID/answers/:aID
//routes for deleting a specific answer
router.delete("/:qID/answers/:aID", function(req, res){
    res.json({
        response: "You sent me a DELETE request to /answers",
        questionId: res.params.qID,
        body: req.params.aID
    });
});

//POST /questions/:qID/answers/:aID/vote-up
//POST /questions/:qID/answers/:aID/vote-down
//routes for voting on a specific answer
router.post("/:qID/answers/:aID/vote-:dir", function(req, res, next){
    if(req.params.dir.search(/^(up|down)$/) === -1 ){
        var err = new Error("Not found");
        err.status = 404;
        next(err);
    } else{
        next();
    }
},function(req, res){
    res.json({
        response: "You sent me a POST request to /vote" + req.params.dir,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});
module.exports = router;
