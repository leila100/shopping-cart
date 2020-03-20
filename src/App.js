import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
