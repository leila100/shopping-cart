import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";
import Header from "./components/header/Header";
import SignIn_SignUp from "./pages/signIn-signUp/SignIn_SignUp";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignIn_SignUp} />
      </Switch>
    </div>
  );
}

export default App;
