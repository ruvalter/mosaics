import React from 'react';
import styled from 'styled-components'
import classes from './square.module.scss';

const Container = styled.div`
  border-radius: 3px;
`

const square = (props) => (
  <Container
    className={classes.square}
    onClick={props.select}
    onMouseOver={props.show}
    onMouseLeave={props.hide}
    style={
      {
        '--background-color': props.square ? props.square.color : 'black'
      }
    }>
    <div className={classes.square__signs}>
      <div className={classes.square__sign_top}></div>
      <div className={classes.square__sign_bottom}></div>
    </div>
    <div className={classes.square__header}>
      <div className={classes.square__label}>{props.square.label}</div>
      <div className={classes.square__category}>{props.square.category}</div>
    </div>
    <div className={classes.square__tags}>
      {
        props.square.tags ? props.square.tags.map(tag => (
          <div key={tag} className={classes.square__tag}>#{tag}</div>
        )) : null
      }
    </div>
  </Container>
);
 
export default square;