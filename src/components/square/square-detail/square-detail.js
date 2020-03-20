import React, { Component }  from 'react';
import classes from './square-detail.module.scss' ;
import axios from '../../../axios-squares';
import { faHome, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SquareDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.square.id || null,
      label: props.square.label || '',
      text: props.square.text || 'some text',
      category: props.square.category || 'framework',
      tags: props.square.tags || [],
      color: props.square.color || ''
    }
  }

  onSaveDetails = () => {
    this.props.close();
    const square = {
      ...this.state
    };
    
    console.log('state', square)
    if (square.id) {
      axios.put('/squares/' + square.id +'/.json', square)
      .then(response => {
        console.log(response);
        
      })
      .catch(error => console.log('Error catched:', error))
    } else {
      axios.post('/squares/.json', square)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log('Error catched:', error))
    }
    
    
  }

  closeDetails = () => {
    this.props.close()
  }

  inputHandler(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
          ...prevState,
          label: value
      })
    );
    console.log('Changed:', this.state)
  }
  
  render() {

    const tags = this.state.tags ? this.state.tags.map(tag => (
      <div key={tag} className={classes.square__tag}>#{tag}</div>
    )) : null;

    return (
      <div 
        className={classes.square}>
        <div className={classes.square__close} onClick={() => this.closeDetails()}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>

        <div className={classes.square__header}>
          <input
            className={classes.square__label}
            type="text"
            onChange={(value) => this.inputHandler(value)}
            value={this.state.label}/>
          
          <div className={classes.square__category}>
          <div 
            className={classes.square__color}
            style={{backgroundColor: this.state.color}}></div>
            {this.state.category}
          </div>
        </div>
        <div className={classes.square__text}>{this.state.text}</div>
        <div className={classes.square__tags}>
          {tags}
        </div>
        <button type="button" onClick={this.onSaveDetails}>SAVE</button>
      </div>
    )
  }
}

export default SquareDetail;