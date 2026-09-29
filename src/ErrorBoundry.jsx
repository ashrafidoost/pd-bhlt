import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // send to TrackJS/Sentry
    console.error("ErrorBoundry caught some stupid error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundry">
          <h2>Uh, Oh!</h2>
          <p>
            There was an error with this page.{" "}
            <Link to="/">Click here to go backto the home page.</Link>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
