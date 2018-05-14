import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './../components/Home';
import DetailsPost from './../components/DetailsPost';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={Home} />
          <Route exact path="/:category/:id" component={DetailsPost} />
      </div>
    );
  }
}

export default App;
