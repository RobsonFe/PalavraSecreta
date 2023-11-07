import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StartScreen() {
  return (
    <div className='container text-center mt-5'>
      <div>
        <h1>Bem Vindo ao Jogo!</h1>
        <p>Clique no botão para começar a jogar</p>
        <button className='btn btn-success'>Inicie o Game</button> 
      </div>
    </div>
  );
}

export default StartScreen;
