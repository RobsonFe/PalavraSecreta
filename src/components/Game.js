/* eslint-disable no-unused-vars */

import React from 'react'
import './Game.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Game({verifyLetter}) {
  return (
    <div className='container-fluid'>
      <p className='points mt-3'>
        <span>Pontuação</span>
      </p>

      <h1 className='h1'>Advinhe a Palavra:</h1>

      <h3 className='h3'>
      Dica sobre a palavra: <span className='tip'>Dica...</span>
      </h3>

      <div className='wordContainer container'>
        <span className='letter'>A</span>
        <span className='blankSquare'></span>
      </div>

      <div className='letterContainer'>
      <p className='h5 mt-3'>Tente advinhar uma letra da palavra</p>
      </div>

      <form className='container'>
        <div className='row justify-content-center'>

        <input className='form-control' type="text" name="letter" maxLength='1' required />
        </div>

        <button className='btn btn-success mt-3'>Coloque uma Letra</button>

      </form>

      <div className='wrongLetterContainer mt-3'>
        <p>Letras já utilizadas</p>
        <span>a,</span>
        <span>b,</span>
      </div>

      <Footer />

      </div>
  )
}

export default Game