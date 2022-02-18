import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import React from 'react'
import ScoreBoard from './ScoreBoard';
import StartScreen from './StartScreen';

const ContentRoutes = () => {
  return (
    <Router>
        {/* <StartScreen/> */}
        <Switch>
            <Route exact path='/scoreboard/:playerName1/:playerName2' component={ScoreBoard}/>
            <Route exact path='/' component={StartScreen}/>
        </Switch>
    </Router>
  )
}

export default ContentRoutes