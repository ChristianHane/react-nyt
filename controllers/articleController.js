const db = require('../models');

async function get(req, res) {
  try {
    const articles = await db.Article.find({});
    res.status(200).json(articles);
  } catch(error) {
    res.status(400).send('Bad request');
  }
}

async function post(req, res) {
  const { title, link } = req.body;
  try {
    const checkDatabase = await db.Article.find({ link: link } );
    if(checkDatabase.length === 0) {
      const saveArticle = await db.Article.create({
        title,
        link,
      })
      res.status(200).send('Success');
    } else {
      res.status(300).send('Could not save duplicate articles');
    }
  } catch(error) {
    console.log(error);
    res.status(400).send('Bad request');
  }
}

async function patch(req, res) {
  const { link, note } = req.body;
  try {
    const addNote = await db.Article.findOneAndUpdate({ link: link }, {$push: {note: note}});
    res.status(200).send('Succes');
  } catch(err) {
    console.log(err);
  }
}

async function remove(req, res) {
  const { ObjectId } = req.query;
  try {
    const removeArticle = await db.Article.remove({
      _id: ObjectId,
    })
    res.status(200).send('Success');
  } catch(error) {
    res.status(400).send('Bad request');
  }
}

module.exports = {
  get,
  post,
  remove,
  patch,
}
