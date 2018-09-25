/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
      <Card className="flex-element">
        <CardActionArea className="contentflex">
          <CardMedia
            className="cardimage"
            component="img"
            height="300"
            image={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.movie.title}
            </Typography>
            <Typography component="p">
              <strong>Release Date: </strong> {props.movie.release_date}
            </Typography>
            <Typography component="p">
              <strong>Rating: </strong> {props.movie.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`movies/${props.movie.id}`}>view</Link>
        </CardActions>
      </Card>
  );
}

export default Movie;
