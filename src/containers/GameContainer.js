import React, { Component } from 'react';
import GameBoard from '../components/GameBoard.js'
import GameLogic from '../models/GameLogic'
import Result from '../components/Result.js'

class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            winner: null,
            currentPlayer: 1,
            restart: true
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.killIt = this.killIt.bind(this)
    }

    handleOnClick(index) {
        console.log(index);

        const newBoard = [...this.state.board];

        newBoard[index] = this.state.currentPlayer;


        // console.log("pre nextPlayer " + this.state.currentPlayer);
        this.nextPlayer()
        // console.log(" nextPlayer " + this.state.currentPlayer);

        console.log("pre board " + this.state.board);

        const tempWinner = GameLogic.hasWon(newBoard)

        this.setState({ board: newBoard, winner: tempWinner })
        console.log("after board " + this.state.board);
    }



    nextPlayer() {
        if (this.state.currentPlayer === 1) {
            this.setState({ currentPlayer: 2 })
        } else {
            this.setState({ currentPlayer: 1 })
        }
    }

    killIt() {
        this.setState({ restart: false })
        this.setState({ restart: true })

        const newGameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        this.setState({ board: newGameBoard })

    }

    render() {
        let tempvariable = this.state.restart ? <GameBoard board={this.state.board} handleOnClick={this.handleOnClick} /> : null

        return (
            <>
                <h1>Noughts and Crosses</h1>
                {tempvariable}
                <Result winner={this.state.winner} />
                <button onClick={this.killIt}>Reset Game</button>
            </>
        )
    }
}

export default GameContainer;