import React, { Component } from 'react';
import GameBoard from '../components/GameBoard.js'
import GameLogic from '../models/GameLogic'
import Result from '../components/Result.js'

class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            buttonDisabled: [false, false, false, false, false, false, false, false, false],
            winner: null,
            currentPlayer: 1,
            restart: true
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.killIt = this.killIt.bind(this)
    }

    handleOnClick(index) {
        const newBoard = [...this.state.board];
        newBoard[index] = this.state.currentPlayer;

        const newButtonDisabled = [...this.state.buttonDisabled];
        newButtonDisabled[index] = true;

        this.nextPlayer()

        const tempWinner = GameLogic.hasWon(newBoard)

        this.setState({ board: newBoard, winner: tempWinner, buttonDisabled: newButtonDisabled })
        console.log(this.state.buttonDisabled);
    }



    nextPlayer() {
        if (this.state.currentPlayer === 1) {
            this.setState({ currentPlayer: 2 })
        } else {
            this.setState({ currentPlayer: 1 })
        }
    }

    killIt() {

        const newGameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        const newButtonDisabled = [false, false, false, false, false, false, false, false, false];

        this.setState({ board: newGameBoard, buttonDisabled:newButtonDisabled })

    }

    render() {

        return (
            <>
                <h1>Noughts and Crosses</h1>
                <GameBoard board={this.state.board} buttonDisabled={this.state.buttonDisabled} handleOnClick={this.handleOnClick} />
                <Result winner={this.state.winner} />
                <button onClick={this.killIt}>Reset Game</button>
            </>
        )
    }
}

export default GameContainer;
