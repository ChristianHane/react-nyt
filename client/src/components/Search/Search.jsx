import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResult from './SearchResults.jsx';
import SavedCard from '../SavedCard/SavedCard.jsx';
import './search.css';

class Search extends React.Component {
  state = {
    savedArticles: [],
    searchResults: [],    
  }

  componentDidMount() {
    this.getSavedArticles();
  }

  updateSearchResults = async (searchTerm, startYear, endYear) => {
    try {
      const searchResults = await axios.get('/api/nytimes', { 
        params: {
          searchTerm, startYear, endYear,
        }});
      this.setState({searchResults: searchResults.data});
    } catch(err) {
      console.log(err);
    }
  }

  getSavedArticles = async () => {
    try {
      const savedArticles = await axios.get('/api/articles');
      this.setState({ savedArticles: savedArticles.data });
    } catch(err) {
      console.log(err);
    }
  }

  changeState = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <div className='container search-container'>
          <p className='text-center container-header'>Search for Articles</p>                
          <SearchForm updateSearchResults={this.updateSearchResults}/>
        </div>
        <div className='container search-container'>
          <p className='text-center container-header'>Search Results</p>
          <ul className='list-group'>
            {this.state.searchResults.map(result => {
              return <SearchResult key={result._id} article={result} getSaved={this.getSavedArticles}/>
            })}
          </ul>
        </div>
        <div className='container search-container'>
          <p className='text-center container-header'>Saved Articles</p>        
          <ul className='list-group'>
            {this.state.savedArticles.map(article => {
              return <SavedCard key={article._id} article={article} getSaved={this.getSavedArticles} notes={article.note}/>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Search;
