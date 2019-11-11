import React from 'react';
import classes from './square-detail.module.scss';

const squareDetail = (props) => {
  

  return (
    <div 
      className={classes.square}
      onClick={props.select}
      onMouseOver={props.show}
      onMouseLeave={props.hide}
      style={
        {
          backgroundColor: props.square ? props.square.color : 'black'
        }
      }>
      <div className={classes.square__header}>
        <div className={classes.square__label}>{props.square ? props.square.label : null}</div>
        <div className={classes.square__category}>{props.square ? props.square.category : null}</div>
      </div>
      <div className={classes.square__text}>{props.square ? props.square.text : null}</div>
      <div className={classes.square__tags}>
        {
          !props.square ? null : props.square.tags.map(tag => (
            <div key={tag} className={classes.square__tag}>#{tag}</div>
          ))
        }
      </div>
    </div>
  )
}

export default squareDetail;