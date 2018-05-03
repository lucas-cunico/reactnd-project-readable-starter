import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './../components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/:category" component={Home} />
      </div>
    );
  }
}

export default App;
