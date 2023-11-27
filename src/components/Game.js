/* eslint-disable no-unused-vars */

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Game({verifyLetter}) {
  return (
    <div>
      <h1>Game</h1>
      <button className='btn btn-success' onClick={verifyLetter}>Finalizar Jogo</button>
      </div>
  )
}

export default Game