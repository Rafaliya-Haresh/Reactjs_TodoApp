import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import configureStore from './store';
import { Provider } from 'react-redux';

import Main from './components/Main';
import Home from './components/Home/';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <Router>
                  <Switch>
                      <Route exact path="/" component={Main}/>
                      <Route path="/home/:name" component={Home}/>
                  </Switch>
              </Router>
      </Provider>
    );
  }
}

export default App;
