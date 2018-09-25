/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
  return(
    <div className="search-results">
      {props.movies ? (<h1 className="results-heading">Search Results</h1>):(<div/>)}
    <div className="flex-container">
      {props.movies ? (
        props.movies.map(
          (movie) => <Movie key={movie.id} movie={movie}/>)):(<div/>)}
    </div>
    </div>
  )
}

export default Movies;
