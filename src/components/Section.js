import React from 'react'
import Rob from './img/Robson.jpg'

function Section() {
  return (
    <div className="card mb-3 mt-5" style={{ maxWidth: '540px' }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={Rob} className="img-fluid rounded-start mt-4" alt="foto do desenvolvedor Robson" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Desenvolvedor do Jogo</h5>
          <p className="card-text">
            Robson Ferreira, Desenvolvedor Full-Stack, atua no mercado de desenvolvimento a quase 2 anos. 
            Utiliza em seus projetos tecnologias como Java, JavaScript, React, Angular, Spring Boot e Bootstrap.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Graduando em Analise e Desenvolvimento de Sistemas</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);
  
}

export default Section