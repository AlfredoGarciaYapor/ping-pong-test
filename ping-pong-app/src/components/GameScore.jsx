import React from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';

const GameScore = (props) => {
  const gameInfo = {
    winner: props.winnerName,
    advantage: props.advantagePoints,
    playerName1: props.player1,
    playerName2: props.player2,
    playerScore1: props.score1,
    playerScore2: props.score2
  }

  async function saveGame(){
    console.log('%c⧭', 'color: #00e600', gameInfo);
    await axios.post('http://localhost:3010/matches/savegame', gameInfo).then((response) => {
      
      console.log('%c⧭', 'color: #00a3cc', response);
    })
  }

  return (
    <div>
        <hr />
        <div className="row d-flex justify-content-center">
          <div className="col-sm-11">
            <h4 className='text-secondary'>Currently winning:</h4>
            <h3>{props.winnerName}</h3>
            <h4 className='text-secondary'>Points difference:</h4>
            <h3>{[props.advantagePoints]}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Button className='btn-save-game' onClick={saveGame}>Save Game</Button>
          </div>
        </div>
    </div>
  )
}

export default GameScore