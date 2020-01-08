import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Sign from "./components/Sign";
import UserProfile from "./components/UserProfile";
import SchoolCards from "./screen/SchoolCards";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sign/:connexion" component={Sign} />
      <Route path="/user_profile" component={UserProfile} />{" "}
      {/* ADD :ID VARIABLE HERE TO GET RIGHT USER */}
      <Route path="/schoolcards/:id" component={SchoolCards} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
