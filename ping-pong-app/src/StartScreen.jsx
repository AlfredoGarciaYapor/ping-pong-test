import React, {useState} from 'react'
import InputPlayer from './components/inputPlayer'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
// import ScoreBoard from './ScoreBoard';

const StartScreen = () => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  // function catchName(e) {

  //   console.log('%c⧭', 'divor: #ff0000', playerName);
  //   setPlayerName(e.target.value)
  // }

  // function scoreBoard() {
    
  // }

  return (
    <>
      <Container className='pageContainer'>
        <Card>
          <Card.Body className='d-flex justify-content-center'>
            <form action="" >
              <div className='row mb-3 mt-3'>
                <InputPlayer onChange = {(e) => {setPlayerName1(e.target.value)}} playerNumber="1"/>
              </div>
              <div className='row mb-5'>
                <InputPlayer onChange = {(e) => {setPlayerName2(e.target.value)}} playerNumber="2"/>
              </div>
              <div className='row'>
                <div className='col d-flex justify-content-center mb-3'>
                  <Link to={"/scoreboard/"+playerName1+"/"+playerName2}><Button className='btn-continue'>Continue</Button></Link>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default StartScreen