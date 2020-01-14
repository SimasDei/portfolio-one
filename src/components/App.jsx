import React, { Component } from 'react';
import Header from './header/header';
import Aux from '../hoc/auxilary';
import About from './aboutSection/about';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Skills from './skillsSection/skillsSection';
import Portfolio from './portfolioSection/portfolio';
import GithubGrid from './githubSection/GithubGrid';
import StatsSection from './statsSection/statsSection';
import Navigation from './navigation/navigation';
import Numbers from './numbers/numbers';
import Certificates from './certificates/certificates';
import Footer from './footer/footer';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Aux>
          <Navigation />
          <Header />
          <About />
          <Skills />
          <Portfolio />
          <GithubGrid />
          <StatsSection />
          <Numbers />
          <Certificates />
          <Footer />
        </Aux>
      </MuiThemeProvider>
    );
  }
}

export default App;
