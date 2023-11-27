/* eslint-disable no-unused-vars */

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function GameOver({retry}) {
  return (
    <div>
      <h1>Game Over</h1>
      <button className='btn btn-success' onClick={retry}>Reiniciar Jogo</button>
      </div>
    
  )
}

export default GameOver