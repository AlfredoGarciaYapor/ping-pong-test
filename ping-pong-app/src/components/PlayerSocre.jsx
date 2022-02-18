import React from 'react'

const PlayerSocre = (props) => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6">
                    <h3 className='text-uppercase playerName'>{props.playerName}</h3>
                </div>
                <div className="col-sm-5 d-flex justify-content-end">
                    <button className='btn remove btn-sm me-1 fs-5' onClick={props.onDecrement}>-1</button>
                    <button className='btn add btn-sm fs-5' onClick={props.onIncrement}>+1</button>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-11">
                    <label className='form-label'><b>Score:</b></label>
                    <h2 className='text-secondary'>{props.score}</h2>
                </div>
            </div>
        </div>
    )
}

export default PlayerSocre