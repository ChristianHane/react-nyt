import React from 'react';
import Modal from 'react-bootstrap4-modal';
import axios from 'axios';
 
class Spacecraft extends React.Component {
  state = {
    showModal: false,
    note: '',
  }
 
  modalBackdropClicked = () => {
    this.setState({showModal: false});
  }

  saveNote = async () => {
    try {
      await axios.patch('/api/articles', {link: this.props.articleLink, note: this.state.note});
      this.setState({showModal: false, note: ''});
      this.props.getSaved();      
    } catch(err) {
      console.log(err);
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
      <button style={{float: 'left', marginRight: 5}} className='btn btn-primary' onClick={() => this.setState({showModal: true})}>Add a Note!</button>
      <Modal visible={this.state.showModal} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Add a note!</h5>
        </div>
        <form style={{width: '90%', marginLeft: '5%', marginTop: '5%'}}>
          <div className='form-group'>
            <input
              id='note'
              className='form-control'
              value={this.state.note}
              name='note'
              onChange={this.handleInputChange}
              type='text'
              placeholder='Add note'
            />
          </div>
        </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.saveNote}>
            Save Note
          </button>
          <button type="button" className="btn btn-primary" onClick={this.modalBackdropClicked}>
            Close
          </button>
        </div>
      </Modal>
      </div>
    );
  }
}

export default Spacecraft;

