/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* global fetch:true */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import '../styles/styles.scss';

import SearchMovie from './SearchMovie';
import Movies from './Movies';

const API_KEY = '550cdedbf6caf11afd3650259725861c';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleSearchMovie(movieName) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(movies => this.setState(() => ({ movies })));
  }

  render() {
    return (
      <div>
        <SearchMovie 
          handleSearchMovie={this.handleSearchMovie}
        />
        <Movies 
          movies={this.state.movies.results}
        />
      </div>
    );
  }
}

export default App;
