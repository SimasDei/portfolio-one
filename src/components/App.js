import React, { Component } from 'react';
import Header from './header/header';
import Aux from '../hoc/auxilary';
import Skills from './skillSection/skills';
class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Skills />
      </Aux>
    );
  }
}

export default App;
