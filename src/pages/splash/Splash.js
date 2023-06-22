import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import "./Splash.css";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    // Set a timeout to redirect after a certain delay (in milliseconds)
    this.redirectTimeout = setTimeout(() => {
      this.setState({ redirect: true });
    }, 5500);
  }

  componentWillUnmount() {
    // Clear the timeout to prevent memory leaks
    clearTimeout(this.redirectTimeout);
  }

  render() {
    const { redirect } = this.state;

    return redirect ? (
      <Redirect to="/home" />
    ) : (
      <div className="splash-container">
        <video className="splash-video" autoPlay loop muted>
          <source src={"../../assets/videos/LogoSplash.mp4"} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Splash;
