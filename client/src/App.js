import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userActions";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import Spinner from "./components/spinner/Spinner";

import Header from "./components/header/Header";

const HomePage = lazy(() => import("./pages/homepage/Homepage.js"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const SignInSignUp = lazy(() => import("./pages/signIn-signUp/SignIn_SignUp"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signin' render={(props) => (currentUser ? <Redirect to='/' /> : <SignInSignUp />)} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
