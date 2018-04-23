import React from 'react';

class SearchForm extends React.Component {
  state = {
    searchTerm: '',
    startYear: '',
    endYear: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const { searchTerm, startYear, endYear } = this.state;
    this.props.updateSearchResults(searchTerm, startYear, endYear);

    this.setState({
      searchTerm: '',
      startYear: '',
      endYear: '',
    })
  };

  render() {
    return (
      <form className='searchForm'>
        <div className='form-group'>
          <label htmlFor='searchTermInput'>Search</label>
          <input
            id='searchTermInput'
            className='form-control'
            value={this.state.searchTerm}
            name='searchTerm'
            onChange={this.handleInputChange}
            type='text'
            placeholder="Search"
          />
        </div>
        <div className='form-group'>
          <label htmlFor='endYearInput'>Start Year</label>
          <input
            id='startYearInput'
            className='form-control'
            value={this.state.startYear}
            name='startYear'
            onChange={this.handleInputChange}
            type='text'
            placeholder='Start Year'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='endYearInput'>End Year</label>
          <input
            id='endYearInput'
            className='form-control'
            value={this.state.endYear}
            name='endYear'
            onChange={this.handleInputChange}
            type='text'
            placeholder='End Year'
          />
        </div>
        <button type='submit' className="btn btn-primary" onClick={this.handleFormSubmit}>Search</button>
      </form>
    )
  }
};

export default SearchForm;
