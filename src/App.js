import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Sign from './components/Sign';
import UserProfile from './components/UserProfile';
import SchoolCards from './components/SchoolCards';
import SearchResults from './components/SearchResults';
import Dashboard from './components/Dashboard';

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign/:connexion" component={Sign} />
        <Route exact path="/user_profile/:id" component={UserProfile} />{' '}
        {/* ADD :ID VARIABLE HERE TO GET RIGHT USER */}
        <Route
          exact
          path="/user_profile/:id/:edit"
          component={UserProfile}
        />{' '}
        {/* ADD :ID VARIABLE HERE TO GET RIGHT USER */}
        <Route path="/schools/:id" component={SchoolCards} />
        <Route path="/results" component={SearchResults} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
