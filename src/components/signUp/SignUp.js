import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/userActions";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { SignUpContainer, Title } from "./signUp.styles";

const SignUp = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match!");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
        <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
