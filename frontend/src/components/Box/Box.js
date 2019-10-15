import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="box">
        <div className="header" onClick={this.togglePanel}>
          {this.props.title}
        </div>

        {this.state.open ? (
          <div className="expend">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
