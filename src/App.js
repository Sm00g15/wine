import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  state = {
    loading: true
  };
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Fragment>
          <img id="wineBottles" src="./winebottles.jpg" alt="" />
          <h1 id="wineLoad">LOADING</h1>
        </Fragment>
      );
    }
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={Home} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
