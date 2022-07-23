const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
require('./routes/index') (app);

app.listen(app.get('port'), () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
});
/*
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://admin:123admin456@cluster0.g3sy4.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
  if (err) console.log("Error occurred connecting to MongoDB...");
  console.log("Connected to MongoDB!");
});
*/