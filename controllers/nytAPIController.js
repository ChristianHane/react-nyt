const db = require('../models');
const cheerio = require('cheerio');
const axios = require('axios');
const request = require('request');

async function get(req, res) {
  const { searchTerm, startYear, endYear } = req.query;
  const startDate = startYear + '0101';
  const endDate = endYear + '0101';
  
  try {
    const articles = await searchArticles(searchTerm, startDate, endDate);
    res.status(200).json(articles);      
  } catch (err) {
    res.status(400).send('Bad Request')
  }
}

function searchArticles(searchTerm, startDate, endDate) {
  return new Promise((resolve, reject) => {
    request.get({
//fix query searchTeram startDate and endDate      
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "292877a69fd948969ed0119298794c6d",
        'q': searchTerm,
        'begin_date': startDate,
        'end_date': endDate,
        'sort': "newest",
        'page': 0
      },
    }, function(err, response, body) {
      body = JSON.parse(body);
      resolve(body.response.docs.slice(0,5));
      if(err) {
        reject(err);
      }
    })
  })
}

module.exports = {
  get,
}
