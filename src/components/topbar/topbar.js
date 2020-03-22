import React, { Component } from "react";
import "./topbar.scss";

class Topbar extends Component {
  state = {
    searchItem: ''
  }

  render() {
    return (
        <input type="text" className="topbar__search" placeholder="search" />
    )
  }
}

export default Topbar;