/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
  },
};

class Footer extends React.Component {
  constructor(){
    super()
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(event, value) {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation
        className="botom-footer"
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Footer);