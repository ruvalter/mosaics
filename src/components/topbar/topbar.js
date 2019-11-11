import React, { Component } from "react";
import "./topbar.scss";

class Topbar extends Component {
  state = {
    searchItem: ''
  }

  render() {
    return (
      <div className="topbar">
        <input type="text" className="topbar__search" placeholder="search" />
      </div>
    )
  }
}

export default Topbar;