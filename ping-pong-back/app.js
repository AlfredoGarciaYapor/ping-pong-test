var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require('mongoose');

const databaseUrl = "mongodb://localhost:27017/pingpong_matches"
const databaseOptions = {
    useNewUrlParser : true
};


mongoose.connect(databaseUrl, databaseOptions);
mongoose.connection.on("open", function(){
    console.log("MongoDB connection openned");
});


var matchesRouter = require('./routes/matches.routes');

var app = express();
app.listen(3010);

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/matches', matchesRouter);

module.exports = app;
