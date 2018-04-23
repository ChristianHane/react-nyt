const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    require: true,
  },
  note: {
    type: Array,
    defaultValue: [],
  }
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
