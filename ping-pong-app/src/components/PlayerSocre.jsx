import React from 'react'

const PlayerSocre = (props) => {
    return (
        <div>
            <h3>{props.playerName}</h3>
            <button onClick={props.onDecrement}>-</button>
            <button onClick={props.onIncrement}>+</button><br />
            <p>Score: </p><h2>{props.score}</h2>
        </div>
    )
}

export default PlayerSocre