import React from 'react';
import classes from './backdrop.scss';

const backdrop = (props) => (
  <div 
    className={`backdrop ${props.show ? 'backdrop--show' : ''}`} 
    onClick={props.clicked}>
    {props.show}
  </div>
);
 
export default backdrop;