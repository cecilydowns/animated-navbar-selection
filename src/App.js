import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
