/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* global fetch:true */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

const API_Key = '550cdedbf6caf11afd3650259725861c';

class TrendingMovies extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      isLoading: true
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`)
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
            movies.map(movie => {
              const { id, title, release_date, poster_path, vote_average } = movie
              return (
                <Card key={id} className="flex-element">
                  <CardActionArea className="contentflex">
                    <CardMedia
                      className="cardimage"
                      component="img"
                      height="280"
                      image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {title}
                      </Typography>
                      <Typography component="p">
                        <strong>Release Date: </strong> {release_date}
                      </Typography>
                      <Typography component="p">
                        <strong>Rating: </strong> {vote_average}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={`movies/${id}`}>view</Link>
                  </CardActions>
                </Card>
              )
            })
          ) : (<div></div>)}
        </div>
      </div>
    )
  }
}

export default TrendingMovies;
