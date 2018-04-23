import React from 'react';
import axios from 'axios';
import NoteModal from './NoteModal.jsx';
import Note from './note.jsx';
import './savedCard.css';


class SavedCard extends React.Component {
  state = {
    article: this.props.article,
    notes: this.props.notes,
  }

  removeArticle = async () => {
    try {
      await axios.delete('/api/articles', {
        params: { ObjectId: this.state.article._id },
      });
      this.getSaved();
    } catch(err) {
      console.log(err);
    }
  }

  getSaved = () => {
    this.props.getSaved();
  }

  render() {
    return (
      <li className='list-group-item'>
        <a href={this.state.article.link} style={{textDecoration: 'none', color: 'black'}}>
          <p className='link' style={{fontSize: '20px', paddingTop: '7px'}}>{this.state.article.title}</p>
        </a>
        <span>Notes: </span>
        <ul>
          {this.state.notes.map((note, index) => {
            return <Note key={index} note={note}/>
          })}
        </ul>
        <NoteModal articleLink={this.state.article.link} getSaved={this.getSaved}/>
        <button onClick={this.removeArticle} type="button" className="btn btn-primary" >Remove</button>
      </li>
    )
  }
}

export default SavedCard;
