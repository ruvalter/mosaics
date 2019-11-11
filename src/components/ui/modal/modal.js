import React from "react";
import classes from './modal.scss';

import Aux from '../../../hoc/aux-wrapper';
import Backdrop from '../backdrop/backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      style={
        {
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }
      } 
      className="modal">
      {props.children}
    </div>
    
  </Aux>
);
export default modal;