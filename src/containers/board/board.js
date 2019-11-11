import React, { Component } from "react";
import "./board.scss";
import Auxwrapper from "../../hoc/aux-wrapper";
import Backdrop from "../../components/ui/backdrop/backdrop";
import Square from "../../components/square/square";
import SquareDetail from "../../components/square/square-detail/square-detail";
import Modal from "../../components/ui/modal/modal";

class Board extends Component {
  state = {
    showBackdrop: false,
    showDetails: false,
    onDisplay: null,
    squares: [
      {
        id: 1,
        label: 'Javascript',
        text: "Lorem ipsum",
        category: 'framework',
        tags: ['js', 'frontend'],
        color: '#ffbd03',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 2,
        label: 'Angular',
        text: "Lorem ipsum",
        category: 'framework',
        tags: ['js', 'frontend'],
        color: '#ffbd03',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 3,
        label: 'Stencil',
        text: "Lorem ipsum",
        category: 'framework',
        tags: ['js', 'frontend'],
        color: '#ffbd03',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 4,
        label: 'Vue',
        text: "Lorem ipsum",
        category: 'framework',
        tags: ['js', 'frontend'],
        color: '#ffbd03',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 5,
        label: 'Backbone',
        text: "Lorem ipsum",
        category: 'library',
        tags: ['js', 'frontend'],
        color: 'green',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 6,
        label: 'Transloco',
        text: "Lorem ipsum",
        category: 'library',
        tags: ['js', 'frontend'],
        color: 'green',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 7,
        label: 'Lodash',
        text: "Lorem ipsum",
        category: 'library',
        tags: ['js', 'frontend'],
        color: 'green',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      },
      {
        id: 8,
        label: 'React',
        text: "Lorem ipsum",
        category: 'library',
        tags: ['js', 'frontend'],
        color: 'green',
        frequency: 40,
        importancy: 70,
        relevancy: 20
      }
    ]
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
      onDisplay: square
    })
  }

  squareCloseHandler = () => {
    console.log('clicked')
    this.setState({showDetails: false});
  }

  render() {
    const squares = this.state.squares.map((square, index) => (
      <Square 
        key={index}
        square={square}
        select={() => this.displayDetailsHandler(square)}
        show={() => this.showBackdrop()}
        hide={() => this.hideBackdrop()}/>
    ))
    return (
      <Auxwrapper>
        <Modal show={this.state.showDetails} modalClosed={this.squareCloseHandler}>
          <SquareDetail square={this.state.onDisplay}/>
        </Modal>
        <Backdrop show={this.state.showBackdrop} />
        <div className="board">
          {squares}
        </div>
      </Auxwrapper>
    )
  }
  
}

export default Board;