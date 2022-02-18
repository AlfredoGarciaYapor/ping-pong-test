import React from 'react'

const InputPlayer = (props) => {

    // const [playerName, setPlayerName] = useState("");

    // function captureName(e) {
    //     setPlayerName(e.target.value)
    // }

  return (
    <div>
        <h5>Player {props.playerNumber} name:</h5>
        <input className='form-control' type="text" onChange={props.onChange}/>
        
    </div>
  )
}

export default InputPlayer