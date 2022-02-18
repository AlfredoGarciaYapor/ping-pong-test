import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const InputPlayer = (props) => {
  InputPlayer.propTypes = {     playerNumber: propTypes.number,     onChange: propTypes.func, };

  return (
    <div>
        <h5>Player {props.playerNumber} name:</h5>
        <input className='form-control' type="text" placeholder="Enter player name" onChange={props.onChange}/>
        
    </div>
  );
};

export default InputPlayer;