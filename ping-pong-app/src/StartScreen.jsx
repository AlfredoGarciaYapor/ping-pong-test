import React, {useState} from 'react'
import InputPlayer from './components/inputPlayer'
import {Link} from 'react-router-dom';
// import ScoreBoard from './ScoreBoard';

const StartScreen = () => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  // function catchName(e) {

  //   console.log('%c⧭', 'color: #ff0000', playerName);
  //   setPlayerName(e.target.value)
  // }

  // function scoreBoard() {
    
  // }

  return (
    <>
      
        <form action="">
          <InputPlayer onChange = {(e) => {setPlayerName1(e.target.value)}} playerNumber="1"/>
          <InputPlayer onChange = {(e) => {setPlayerName2(e.target.value)}} playerNumber="2"/>
          <Link to={"/scoreboard/"+playerName1+"/"+playerName2}>Continue</Link>
        </form>
    </>
  )
}

export default StartScreen