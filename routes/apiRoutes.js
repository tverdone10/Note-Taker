var express = require('express')
var db = require('../db/db.json')
var router=require('express').Router()
var fs=require('fs')
// var db = require("../db/db.json")

router.get("/notes", function (req, res){
        return res.json(db)
        
});

router.post("/notes", function (req, res){

    return res.json(fs.writeFile(db, "utf8", (err) => {
           if (err) throw err;
           console.log("Sucess")
       }))

})


// router.delete("/notes", function (req, res){
//     return res.json(db)
// })


// router.post("/notes", function (req, res){
    
    // })
module.exports = router 
        // return res.json(fs.writeFile("db.json" , "utf8", (err) => {
        //     if (err) throw err;
        //     console.log("Sucess");
        //     })