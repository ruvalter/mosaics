import React from 'react';
import classes from './square.scss';



const square = (props) => (
  <div 
    className={`square square-${props.size}`}
    onClick={props.select}
    onMouseOver={props.show}
    onMouseLeave={props.hide}
    style={
      {
        '--background-color': props.square ? props.square.color : 'black'
      }
    }>
    <div className="square__header">
      <div className="square__label">{props.square.label}</div>
      <div className="square__category">{props.square.category}</div>
    </div>
    <div className="square__tags">
      {
        props.square.tags.map(tag => (
          <div key={tag} className="square__tag">#{tag}</div>
        ))
      }
    </div>
  </div>
);
 
export default square;