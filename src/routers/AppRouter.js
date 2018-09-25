/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import MovieCollection from '../components/MovieCollection';
import MovieDetail from '../components/MovieDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import TrendingMovies from '../components/TrendingMovies';
import Collection from '../components/Collection';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/collections" component={MovieCollection} />
        <Route path="/movies/:id" component={MovieDetail} />
        <Route path="/trending-movies" component={TrendingMovies} />
        <Route exact path="/collection" component={Collection} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
