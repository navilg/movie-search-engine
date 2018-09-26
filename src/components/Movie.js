/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Movie = ({movie}) => {
  return (
      <Card className="flex-element">
        <CardActionArea className="contentflex">
          <CardMedia
            className="cardimage"
            component="img"
            height="300"
            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {movie.title}
            </Typography>
            <Typography component="p">
              <strong>Release Date: </strong> {movie.release_date}
            </Typography>
            <Typography component="p">
              <strong>Rating: </strong> {movie.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`movies/${movie.id}`}>view</Link>
        </CardActions>
      </Card>
  );
}

export default Movie;
