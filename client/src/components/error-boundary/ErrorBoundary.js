import React, { Component } from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./errorBoundary.styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(info);
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
          <ErrorImageText>Sorry, something went wrong!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
