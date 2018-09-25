/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

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
    return (
      <div className="hero">
          <Input placeholder="Seach movies" onChange={this.handleOnChange}/>
          <SearchIcon className="search-icon" onClick={()=>this.props.handleSearchMovie(this.state.searchTerm)}/>
      </div>
    );
  }
}

export default SearchMovie;
