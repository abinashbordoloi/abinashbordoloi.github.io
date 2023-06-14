import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

<<<<<<< HEAD

=======
>>>>>>> 3f869988c6d5150de0e7b6126a5caa77da91b640
function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
