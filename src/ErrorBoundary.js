import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className='errMsg'>Sorry, Foursquare data can't load right now!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;