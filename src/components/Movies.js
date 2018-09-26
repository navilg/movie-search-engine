/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import Movie from './Movie';

const Movies = ({movies}) => {
  return(
    <div className="search-results">
      {movies ? (<h1 className="results-heading">Search Results</h1>):(<div/>)}
    <div className="flex-container">
      {movies ? (
        movies.map(
          (movie) => <Movie key={movie.id} movie={movie}/>)):(<div/>)}
    </div>
    </div>
  )
}

export default Movies;
