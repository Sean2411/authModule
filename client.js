/**
 * Created by lu1 on 2017/5/13.
 */
var express    = require("express");
var morgan     = require("morgan");
var app        = express();

var port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static("./app"));
app.use('/bower_components',  express.static('./bower_components'));


app.get("/", function(req, res) {
    res.sendFile("./app/index.html");
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});