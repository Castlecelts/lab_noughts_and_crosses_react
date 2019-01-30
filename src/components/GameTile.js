import React from 'react';

const GameTile = (props) => {
    // console.log(props);


    function handleTileOnClick(event) {
        // console.log(props);
        console.log(event.target);


        props.handleOnClick(event.target.value)
        event.target.disabled = true;
    }

    return (
        <>
            <button className="tile" onClick={handleTileOnClick} value={props.index}>{props.value}</button>
        </>
    )
}

export default GameTile