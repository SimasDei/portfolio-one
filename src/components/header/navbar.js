import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return (
    <AppBar position="sticky" style={{ background: 'transparent' }}>
      <Toolbar>
        <Typography variant="title" style={{ color: 'white' }}>
          Simas Dei
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
