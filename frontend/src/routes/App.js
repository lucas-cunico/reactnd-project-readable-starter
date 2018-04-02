import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Categories from './../components/Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Categories} />
      </div>
    );
  }
}

export default App;
