import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
require("./resources/stylesheets/app");

import AppLayout from './components/layouts/AppLayout';

export default class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AppLayout>
    );
  }
}