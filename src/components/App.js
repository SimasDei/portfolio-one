import React, { Component } from 'react';
import Header from './header/header';
import Aux from '../hoc/auxilary';
import About from './aboutSection/about';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: { useNextVariants: true }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Aux>
          <Header />
          <About />
        </Aux>
      </MuiThemeProvider>
    );
  }
}

export default App;
