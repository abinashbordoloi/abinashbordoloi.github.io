import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splashscreen from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
// import LoaderLogo from "../components/Loader/LoaderLogo";

export default class Main extends Component {
  render() {
    const { isSplash } = settings;

    return (
      <div>
        {isSplash && <Splashscreen showSplash={true} />}
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" Splashscreen />

            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/opensource"
              render={(props) => (
                <Opensource {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/splash"
              render={(props) => (
                <Splashscreen {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="*"
              render={(props) => (
                <Error404 {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
