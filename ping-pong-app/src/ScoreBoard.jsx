import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import GameScore from './components/GameScore';
import PlayerSocre from './components/PlayerSocre'

const ScoreBoard = () => {
    let {playerName1, playerName2} = useParams();
    const [playerScore1, setPlayerScore1] = useState(0);
    const [playerScore2, setPlayerScore2] = useState(0);
    const [winner, setWinner] = useState("");
    const [advantage, setAdvantage] = useState(0);
    
    useEffect(() => {
        if (playerScore1 > playerScore2) {
            setWinner(playerName1);
            setAdvantage(playerScore1 - playerScore2);
        }else if (playerScore1 < playerScore2) {
            setWinner(playerName2);
            setAdvantage(playerScore2 - playerScore1);
        }else {
            setWinner("Tied Game");
            setAdvantage(playerScore2 - playerScore1);
        }
    
    //   return () => {
    //     second
    //   }
    }, [playerScore1, playerScore2])
    
    return (
        <Container>
            <Card>
                <Card.Header className='text-center'>
                    <h1>Scoreboard</h1>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <PlayerSocre playerName = {playerName1} onIncrement={() => {setPlayerScore1(playerScore1 + 1)}} onDecrement={() => {setPlayerScore1(playerScore1 - 1)}} score={playerScore1}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlayerSocre playerName = {playerName2} onIncrement={() => {setPlayerScore2(playerScore2 + 1)}} onDecrement={() => {setPlayerScore2(playerScore2 - 1)}} score={playerScore2}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <GameScore winnerName = {winner} advantagePoints = {advantage}/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ScoreBoard