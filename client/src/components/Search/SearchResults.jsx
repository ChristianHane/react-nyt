import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  state = {
    article: this.props.article,
  }

  saveArticle = async () => {
    try {
      await axios.post('/api/articles', {title: this.state.article.headline.main, link: this.state.article.web_url});
      this.props.getSaved();
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <li className='list-group-item'>
        <a href={this.state.article.web_url} style={{textDecoration: 'none', color: 'black'}}>
          <p style={{fontSize: '20px', paddingTop: '7px'}}>{this.state.article.headline.main}</p>
        </a>
        <button onClick={this.saveArticle} type="button" className="btn btn-primary">Save</button>
      </li>
    )
  }
}

export default SearchResult;
