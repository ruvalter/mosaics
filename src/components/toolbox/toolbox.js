import React, { Component } from "react";
import "./toolbox.scss";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      position: 'absolute'
    },
  },
}));

class Toolbox extends Component {
  state = {}
  
  

  render() {
    return (
      <button className="button" onClick={this.props.newSquare}>
        <AddIcon className="button__icon" style={{ fontSize: 40 }}/>
      </button>
    )
  }
}

export default Toolbox;