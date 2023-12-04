/* eslint-disable no-unused-vars */

import React, { useState, useRef} from 'react'
import './Game.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Game({verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters,
  guesses, 
  score
}) {

    const [letter, setLetter] = useState("");

    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault()
      
      verifyLetter(letter);

      setLetter("");

      letterInputRef.current.focus();
    }

  return (
    <div className='container-fluid'>
      <p className='points mt-3'>
        <span>Pontuação: {score}</span>
      </p>

      <h1 className='h1'>Advinhe a Palavra</h1>

      <h3 className='tip'>
      Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>

      <p>Voce ainda tem {guesses} tentativa(s)</p>

      <div className='wordContainer container'>

        {letters.map((letter, i)=>
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ): (
            <span key={i} className='blankSquare'></span>
          )
        )}
      </div>

      <div className='letterContainer'>
      <p className='h5 mt-3'>Tente advinhar uma letra da palavra</p>
      </div>

      <form className='container' onSubmit={handleSubmit} >
        <div className='row justify-content-center'>

        <input className='form-control'
         type="text" 
         name="letter" 
         maxLength='1' 
         required 
         onChange={(e)=> setLetter(e.target.value)} 
         value={letter} 
         ref={letterInputRef} />
        </div>

        <button className='btn btn-success mt-3'>Coloque uma Letra</button>

      </form>

      <div className='wrongLetterContainer mt-3'>
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i)=>(
          <span key={i}> {letter}, </span>
        ))}
      </div>

      <Footer />

      </div>
  )
}

export default Game