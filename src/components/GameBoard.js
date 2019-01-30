import React from 'react';
import GameTile from './GameTile';

const GameBoard = (props) => {
    const tiles = props.board.map((value, index, handleOnClick) => {
        return (
            <GameTile key={index} value={value} index={index} handleOnClick={props.handleOnClick} />
        )
    })

    return (
        <>
            <div id="game-board">
                {tiles}
            </div>
        </>
    )
}

export default GameBoard;