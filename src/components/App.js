import React, { Component } from 'react';
import Header from './header/header';
import Aux from '../hoc/auxilary';
import About from './aboutSection/about';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Skills from '../components/skillsSection/skillsSection';
import Portfolio from '../components/portfolioSection/portfolio';
import StatsSection from '../components/statsSection/statsSection';
import Navigation from '../components/navigation/navigation';
import Numbers from '../components/numbers/numbers';
import Certificates from '../components/certificates/certificates';
import Footer from '../components/footer/footer';

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
          <Navigation />
          <Header />
          <About />
          <Skills />
          <Portfolio />
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
