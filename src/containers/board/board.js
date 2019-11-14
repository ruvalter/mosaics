import React, { Component } from "react";
import "./board.scss";
import Auxwrapper from "../../hoc/aux-wrapper";
// import Backdrop from "../../components/ui/backdrop/backdrop";
import Square from "../../components/square/square";
import SquareDetail from "../../components/square/square-detail/square-detail";
import Modal from "../../components/ui/modal/modal";
import withErrorHandler from '../../hoc/with-error-handler';
import axios from '../../axios-squares';
import Toolbox from "../../components/toolbox/toolbox";

class Board extends Component {
  state = {
    showBackdrop: false,
    showDetails: false,
    onDisplay: null,
    squares: null
  }

  // [
  //   {
  //     label: 'Javascript',
  //     text: "Lorem ipsum",
  //     category: 'framework',
  //     tags: ['js', 'frontend'],
  //     color: '#ffbd03',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     label: 'Angular',
  //     text: "Lorem ipsum",
  //     category: 'framework',
  //     tags: ['js', 'frontend'],
  //     color: '#ffbd03',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     id: 3,
  //     label: 'Stencil',
  //     text: "Lorem ipsum",
  //     category: 'framework',
  //     tags: ['js', 'frontend'],
  //     color: '#ffbd03',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     id: 4,
  //     label: 'Vue',
  //     text: "Lorem ipsum",
  //     category: 'framework',
  //     tags: ['js', 'frontend'],
  //     color: '#ffbd03',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     id: 5,
  //     label: 'Backbone',
  //     text: "Lorem ipsum",
  //     category: 'library',
  //     tags: ['js', 'frontend'],
  //     color: 'green',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     id: 6,
  //     label: 'Transloco',
  //     text: "Lorem ipsum",
  //     category: 'library',
  //     tags: ['js', 'frontend'],
  //     color: 'green',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     id: 7,
  //     label: 'Lodash',
  //     text: "Lorem ipsum",
  //     category: 'library',
  //     tags: ['js', 'frontend'],
  //     color: 'green',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   },
  //   {
  //     id: 8,
  //     label: 'React',
  //     text: "Lorem ipsum",
  //     category: 'library',
  //     tags: ['js', 'frontend'],
  //     color: 'green',
  //     frequency: 40,
  //     importancy: 70,
  //     relevancy: 20
  //   }
  // ]

  componentDidMount() {
    this.fetchSquares()
  }

  fetchSquares = () => {
    axios.get('https://mosaic-squares.firebaseio.com/squares.json')
      .then(response => {
        console.log(response.data)
        const array = Object.keys(response.data).map(key => response.data[key]);
        this.setState({squares: [...array]})
      })
      .catch(error => console.log('Error fetching'))
  }

  showBackdrop() {
    this.setState({
      showBackdrop: true
    })
  }

  hideBackdrop() {
    this.setState({
      showBackdrop: false
    })
  }

  displayDetailsHandler(square) {

    this.setState({
      showDetails: true,
      onDisplay: square || {}
    })
  }

  squareCloseHandler = () => {
    console.log('clicked')
    this.setState({showDetails: false});
    // this.fetchSquares();
  }

  render() {
    const squares = this.state.squares ? this.state.squares.map((square, index) => (
      <Square 
        key={index}
        square={square}
        select={() => this.displayDetailsHandler(square)}
        show={() => this.showBackdrop()}
        hide={() => this.hideBackdrop()}/>
    )) : null;

    const detail = this.state.showDetails ? <SquareDetail square={this.state.onDisplay} close={this.squareCloseHandler}/> : null;

    return (
      <Auxwrapper>
        <Modal show={this.state.showDetails} modalClosed={this.squareCloseHandler}>
          {detail}
        </Modal>
        {/* <Backdrop show={this.state.showBackdrop} /> */}
        <div className="board">
          {squares}
        </div>
        <Toolbox newSquare={() => this.displayDetailsHandler()} />
      </Auxwrapper>
    )
  }
  
}

export default withErrorHandler(Board, axios);