import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar className="nav">
      <Typography variant="h6">
        <NavLink to="/" exact className="nav__link">Главная</NavLink>
      </Typography>
      <Typography variant="h6">
        <NavLink to="/post-add" className="nav__link">Добавить запись</NavLink>
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Navbar;