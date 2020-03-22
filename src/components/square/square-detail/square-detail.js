import React, { Component }  from 'react';
import classes from './square-detail.module.scss' ;
import axios from '../../../axios-squares';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from '@tinymce/tinymce-react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const CATEGORIES = [
  'Select a Category',
  'framework',
  'lib',
  'language'
];

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


class SquareDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.square.id || null,
      label: props.square.label || '',
      text: props.square.text || 'some text',
      category: props.square.category || 'Select a Category',
      tags: props.square.tags || [],
      color: props.square.color || 'grey'
    }
  }

  handleChange = event => {
    let newColor;
    const value = event.target.value ? event.target.value : null;
    console.log('e', value)
    switch (value) {
      case CATEGORIES[1]:
        newColor = '#ffbd03';
        break;
      case CATEGORIES[2]:
        newColor = '#0b4dca';
        break;
      case CATEGORIES[3]:
        newColor = '#c51111';
        break;
      case null:
      default:
        newColor = 'grey';
    }
    this.setState(
      prevState => ({
          ...prevState,
          category: event.target.value,
          color: newColor
      })
    );
  };

  onSaveDetails = () => {
    const square = {
      ...this.state
    };
    
    console.log('state', square)
    if (square.id) {
      axios.put('/squares/' + square.id +'/.json', square)
      .then(response => {
        this.props.close();
        console.log(response);
        
      })
      .catch(error => console.log('Error catched:', error))
    } else {
      axios.post('/squares/.json', square)
      .then(response => {
        this.props.close();
        console.log(response);
      })
      .catch(error => console.log('Error catched:', error))
    }
  }

  onDeleteNote = () => {
    const square = {
      ...this.state
    };
    
    axios.delete('/squares/' + square.id +'/.json')
    .then(response => {
      this.props.close();
      console.log(response);
    })
    .catch(error => console.log('Error catched:', error))
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
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    this.setState(
      prevState => ({
          ...prevState,
          text: content
      })
    );
  }
  textHandler = (e) => {
    let value = e.target.value;
    this.setState(
      prevState => ({
          ...prevState,
          text: value
      })
    );
    console.log('Changed:', this.state)
  }
  
  render() {

    const tags = this.state.tags ? this.state.tags.map(tag => (
      <div key={tag} className={classes.square__tag}>#{tag}</div>
    )) : null;

    const categories = CATEGORIES.map(category => (
      <MenuItem key={category} value={category}>{category}</MenuItem>
    ));

    return (
      <div 
        className={classes.square}>
        <div className={classes.square__header}>
          <IconButton color='inherit' aria-label="close" onClick={() => this.closeDetails()}>
            <CloseIcon />
          </IconButton>
          <IconButton color='inherit'  aria-label="close" onClick={this.onSaveDetails}>
            <SaveIcon />
          </IconButton>
        </div>
        

        <div>
          <input
            className={classes.square__label}
            placeholder="Note Title"
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
        
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel> */}
          <Select
            className={classes.root}
            placeholder="Select a category"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.category ? this.state.category : null}
            onChange={this.handleChange}
            label="category"
            input={<BootstrapInput />}
          >
            {categories}
          </Select>
        </FormControl>
        
        <textarea className={classes.square__text} value={this.state.text} onChange={this.textHandler}></textarea>
        {/* <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          onInit={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              this.textHandler(data);
              console.log( { event, editor, data } );
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
        /> */}
        {/* <Editor
         
         apiKey="cqxbsm1uqsn0cq1qzhfmb9wel50l5h544d36vm6s9wcuocfx"
         initialValue="<p>What do you want to write today?</p>"
         value={this.state.text}
         init={{
           height: 500,
           menubar: false,
           plugins: [],
           branding: false,
           statusbar: false,
           browser_spellcheck: true,
           paste_retain_style_properties: "color font-size background",
           toolbar:
             'bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat'
         }}
         onEditorChange={this.handleEditorChange}
       /> */}
        
        {/* <div className={classes.square__tags}>
          {tags}
        </div> */}
        <Button variant="outlined" color="secondary" onClick={() => this.onDeleteNote()}>
          Delete Note
        </Button>
      </div>
    )
  }
}

export default SquareDetail;