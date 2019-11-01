import React, { Component, Fragment } from "react";
import Home from "../Component/Home";
class Aio extends Component {
  render() {
    const getMatch = this.props.match.path;
    return <Fragment>{getMatch === "/" ? <Home /> : null}</Fragment>;
  }
}

export default Aio;
