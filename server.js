const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./models');

const app = express();
const router = require('./routes/router.js');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./client'));

app.use(router);
app.get('*', (req, res) => res.send('./public/index.html'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds117821.mlab.com:17821/heroku_vmdxtn7d' || 'mongodb://localhost/react-nyt-homework');

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
})
