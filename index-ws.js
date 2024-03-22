const express = require('express');
const server = require('http').createServer();
const path = require('path');
const app = express();

app.get("/", function(req,res){
    const indexPath = path.join(__dirname, "src", "home","index.html");
    res.sendFile(indexPath);
})

server.on("request", app);
server.listen(3000, function(){console.log("Listening on 3000"); });



