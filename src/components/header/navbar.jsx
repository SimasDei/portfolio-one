import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = () => {
  return (
    <AppBar id="#top" position="sticky" style={{ background: 'transparent' }}>
      <Toolbar>
        <Typography
          className="navbar-logo"
          style={{ color: '#0cc3db', fontSize: '2rem' }}
        >
          Simas Dei
        </Typography>
        <Button style={{ height: '100%' }}>
          <a href="#skills">SKILLS</a>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
