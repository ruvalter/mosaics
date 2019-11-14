import React, { Component } from "react";
import "./toolbox.scss";

class Toolbox extends Component {
  state = {}

  render() {
    return (
      <div className="toolbox">
        <button className="toolbox__button" onClick={this.props.newSquare}>+</button>
        <button className="toolbox__button">-</button>
      </div>
    )
  }
}

export default Toolbox;