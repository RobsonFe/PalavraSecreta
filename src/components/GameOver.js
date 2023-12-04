/* eslint-disable no-unused-vars */

import React from 'react'
import Footer from './Footer';
import Rob from './img/Robson.jpg'
import './GameOver.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function GameOver({retry, score}) {
  return (
    <div>
      <h1 className='h1 mt-5 container'>Fim do Jogo</h1>
      <h2 className='h2 container'>A sua pontuação foi <span>{score}</span></h2>
      <button className='btn btn-success' 
      onClick={retry}>Reiniciar Jogo</button>

<div className="card mb-3 mt-4 container" style={{ maxWidth: '540px' }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={Rob} className="img-fluid rounded-start mt-4" alt="foto do desenvolvedor Robson" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Desenvolvedor do Jogo</h5>
          <p className="card-text">
            Obrigado pela oportunidade de testar meu projeto!!!
          </p>
          <p className='card-text'>
          Este projeto é uma expressão tangível do meu domínio em React. A biblioteca React permitiu criar componentes reutilizáveis, facilitando a manutenção e expansão do jogo.
          </p>
          <p className='card-text'>
          A estrutura de componentes também contribui para um código limpo e modular, refletindo as melhores práticas de desenvolvimento.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Graduando em Analise e Desenvolvimento de Sistemas</small>
          </p>
        </div>
      </div>
    </div>
  </div>

              <Footer />
      </div>
    )
  }

export default GameOver