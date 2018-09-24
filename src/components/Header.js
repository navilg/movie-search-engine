import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
    return (
        <div className="header-element">
            <AppBar position="fixed" className="top-nav-appbar">
                <Toolbar className="top-nav">
                    <div className="left-nav">
                        <Link to="/" className="home-icon">
                            <HomeIcon className="icon" />
                        </Link>
                        <Typography variant="display1" color="inherit" className="headerText">Movie Search Engine</Typography>
                    </div>
                    <div className="link-nav">
                        <NavLink to="/trending-movies">Trending Movies</NavLink>
                        <NavLink to="/collections">My Collections</NavLink>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Header;