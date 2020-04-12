import React from "react";
import { connect } from "react-redux";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart } from "../../redux/user/userActions";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { SignInContainer, Title, Buttons } from "./signIn.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>
              Sign In With Google
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
