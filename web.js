var express = require('express');
var app     = express.createServer(express.logger());
var io      = require('socket.io').listen(app);
var Game    = require('./model/Game.js');
var Player  = require('./model/Player.js');

var game = new Game('singleton?');

app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);    
    app.use(express['static'](__dirname + "/public"));
});

io.sockets.on('connection', function (socket) {
    var player = new Player('name?', socket);
    game.addPlayer(player);
    socket.emit('client', { message: player.name + " joined" });
    
    socket.on('server', function (data) {
        console.log(data.message);
    });
});

var port = process.env.C9_PORT || process.env.PORT;
app.listen(port, '0.0.0.0', function() {
    console.log("Listening on " + port);
});

