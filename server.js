var express = require("express");
var app = express();
var path = require("path");

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname + "/view.html"));
});

app.listen(3000,function(){
  console.log("Server is up and running");
});
