import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App.js';
import MovieCollection from '../components/MovieCollection.js';
import MovieDetail from '../components/MovieDetail.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import NotFound from '../components/NotFound.js';
import TrendingMovies from '../components/TrendingMovies.js';
import Collection from '../components/Collection';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/collections" component={MovieCollection} />
        <Route path="/movies/:id" component={MovieDetail} />
        <Route path="/trending-movies" component={TrendingMovies} />
        <Route exact path="/collection" component={Collection} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default AppRouter;