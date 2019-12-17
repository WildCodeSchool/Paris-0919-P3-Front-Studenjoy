import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Sign from './components/Sign';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sign/:connexion" component={Sign} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));

