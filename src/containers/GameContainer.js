import React, { Component } from 'react';

class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            winner: null
        }
    }

    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}

export default GameContainer; ``