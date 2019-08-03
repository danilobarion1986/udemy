import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  }

  // A little different from the course, like implemented on React docs:
  // https://reactjs.org/docs/react-component.html#error-boundaries
  static getDerivedStateFromError = (error) => {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch = (error, info) => {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>this.state.errorMessage</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
