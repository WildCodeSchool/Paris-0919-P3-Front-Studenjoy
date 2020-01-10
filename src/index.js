
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Sign from './components/Sign';
import UserProfile from './components/UserProfile';
import SchoolsList from './components/SchoolsList';


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sign/:connexion" component={Sign} />
      <Route exact path="/user_profile/:id" component={UserProfile} /> {/* ADD :ID VARIABLE HERE TO GET RIGHT USER */}
      <Route exact path="/user_profile/:id/:edit" component={UserProfile} /> {/* ADD :ID VARIABLE HERE TO GET RIGHT USER */}
      <Route path="/schools/:city" component={SchoolsList} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
