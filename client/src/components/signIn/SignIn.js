import React, { useState } from "react";
import { connect } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../redux/user/userActions";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { SignInContainer, Title, Buttons } from "./signIn.styles";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type='email' name='email' value={email} required handleChange={handleChange} label='Email' />
        <FormInput
          type='password'
          name='password'
          value={password}
          required
          handleChange={handleChange}
          label='password'
        />

        <Buttons>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>
            Sign In With Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
