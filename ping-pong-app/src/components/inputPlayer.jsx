import React from 'react'

const InputPlayer = (props) => {

    // const [playerName, setPlayerName] = useState("");

    // function captureName(e) {
    //     setPlayerName(e.target.value)
    // }

  return (
    <div>
        <label>Player {props.playerNumber} name:</label><br />
        <input type="text" onChange={props.onChange}/>
        
    </div>
  )
}

export default InputPlayer