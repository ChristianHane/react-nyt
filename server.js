const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./models');

const app = express();
const router = require('./routes/router.js');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./client/build'));

app.use(router);
// app.get('*', (req, res) => res.send('./public/index.html'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/react-nyt-homework');

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
})
