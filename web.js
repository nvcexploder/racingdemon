var express = require('express');
var app = express.createServer(express.logger());

app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);    
    app.use(express['static'](__dirname + "/public"));
});

var port = process.env.C9_PORT || process.env.PORT;
app.listen(port, '0.0.0.0', function() {
    console.log("Listening on " + port);
});
