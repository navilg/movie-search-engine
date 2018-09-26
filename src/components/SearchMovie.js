/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  } 

  render() {
    const { handleSearchMovie } = this.props;
    const { searchTerm } = this.state;
    return (
      <div className="hero">
          <Input placeholder="Seach movies" onChange={this.handleOnChange}/>
          <SearchIcon className="search-icon" onClick={()=>handleSearchMovie(searchTerm)}/>
      </div>
    );
  }
}

export default SearchMovie;
