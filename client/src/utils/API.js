import axios from 'axios';

export default {
  searchForArticles: function() {
    return axios.get('/api/nytimes');
  },
  getSavedArticles: function() {
    return axios.get('/api/articles');
  },
  saveArticle: function(article) {
    return axios.post('/api/articles', article);
  },
  deleteArticle: function(articleId) {
    return axios.delete('/api/articles', articleId);
  },
}
