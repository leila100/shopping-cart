import React from "react";

import "./signIn-signUp.styles.scss";

import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

const SignIn_SignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignIn_SignUp;
