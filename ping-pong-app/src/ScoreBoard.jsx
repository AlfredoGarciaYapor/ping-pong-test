import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import GameScore from './components/GameScore';
import PlayerSocre from './components/PlayerSocre'

const ScoreBoard = () => {
    let {playerName1, playerName2} = useParams();
    const [playerScore1, setPlayerScore1] = useState(0);
    const [playerScore2, setPlayerScore2] = useState(0);
    // function addWin() {
        
    // }
    return (
        <>
            <h1>Marcador del juego</h1>
            <PlayerSocre playerName = {playerName1} onIncrement={() => {setPlayerScore1(playerScore1 + 1)}} onDecrement={() => {setPlayerScore1(playerScore1 - 1)}} score={playerScore1}/>
            <PlayerSocre playerName = {playerName2} onIncrement={() => {setPlayerScore2(playerScore2 + 1)}} onDecrement={() => {setPlayerScore2(playerScore2 - 1)}} score={playerScore2}/>
            <GameScore/>
        </>
    )
}

export default ScoreBoard