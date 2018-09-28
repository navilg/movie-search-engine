/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import Movie from './Movie';

const ApiKey = '550cdedbf6caf11afd3650259725861c';

class TrendingMovies extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      isLoading: true
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
      .then(function (Data) { return Data.json(); })
      .then(data => {
        this.setState({
          movies: data.results,
          isLoading: false
        });
      }
      );
  }


  render() {
    const { movies, isLoading } = this.state;
    return (
      <div className="trending-movies">
        <h1>Trending Movies</h1>
        <div className='flex-container-popular'>
          {!isLoading ? (
            movies.map((movie) => <Movie key={movie.id} movie={movie}/>)) : (<div />)}
        </div>
      </div>
    )
  }
}

export default TrendingMovies;
