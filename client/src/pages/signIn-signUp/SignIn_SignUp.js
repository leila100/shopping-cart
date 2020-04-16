import React from "react";

import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

import { SignInSignUpContainer } from "./signInSignUp.styles";

const SignIn_SignUp = () => {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

export default SignIn_SignUp;
