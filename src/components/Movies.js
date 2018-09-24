import React from 'react';
import Movie from './Movie.js';

const Movies = (props) => {
  return(
    <div className="search-results">
      {props.movies ? (<h1 className="results-heading">Search Results</h1>):(<div/>)}
    <div className="flex-container">
      {props.movies ? (props.movies.map((movie, index) => <Movie key={index} movie={movie}/>)):(<div/>)}
    </div>
    </div>
  )
}

export default Movies;