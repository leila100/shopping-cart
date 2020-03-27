import React from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { SignInContainer, Title, Buttons } from "./signIn.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='password'
          />

          <Buttons>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
