import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './../components/Home';
import DetailsPost from './../components/DetailsPost';
import NotFound from './../components/NotFound';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:category" component={Home}/>
                    <Route exact path="/:category/:id" component={DetailsPost}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
