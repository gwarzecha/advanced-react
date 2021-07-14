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
    const { render } = this.props;
    return (
      <div>
        {/* passes data as a parameter into the render prop in App.js */}
        {render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}
