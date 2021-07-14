import React, { Component } from "react";

export default class Toggle extends Component {
  // beginning of basic toggle creation
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}
