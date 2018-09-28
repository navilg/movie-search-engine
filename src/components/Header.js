/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Folder';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(side, open) {
    this.setState({
      [side]: open,
    });
  }

  render() {
    var { left } = this.state;
    return (
      <div className="header-element">
        <AppBar position="fixed" className="top-nav-appbar">
          <Toolbar className="top-nav">
            <div className="left-nav">
              <MenuIcon className="icon" onClick={() => this.toggleDrawer('left', true)} />
              <Typography variant="display1" color="inherit" className="headerText">Movie Search Engine</Typography>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          open={left}
          onClose={() => this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer('left', false)}
            onKeyDown={() => this.toggleDrawer('left', false)}
          >
            <div className="side-drawer">
              <List>
                <ListItem button>
                  <NavLink to="/"><HomeIcon className="icon" /><h3>Home</h3></NavLink>
                </ListItem>
                <ListItem button>
                  <NavLink to="/trending-movies"><StarIcon className="icon" /><h3>Trending Movies</h3></NavLink>
                </ListItem>
                <ListItem button className="side-link">
                  <NavLink to="/collections"><FolderIcon className="icon" /><h3>My Collection</h3></NavLink>
                </ListItem>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
