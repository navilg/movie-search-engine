/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    404!
    <Link to="/">Go Home!</Link>
  </div>
);

export default NotFound;
