import React from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/Header";
import SignIn_SignUp from "./pages/signIn-signUp/SignIn_SignUp";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";

import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
