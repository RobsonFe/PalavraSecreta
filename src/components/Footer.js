import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Palavra Secreta</h5>
            <p>
              Palavra Secreta é um jogo educativo com o intuito de demonstrar o meu aprendizado utilizando React.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/robson-ferreira-508247134/" className="text-dark">Linkedin</a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/RobsonFe" className="text-dark">GitHub</a>
              </li>

              <li>
                <a target="_blank" href="https://www.instagram.com/rob_ferreira88/" className="text-dark">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contato</h5>
            <ul className="list-unstyled">
              {/* <li>
                <p className="text-dark">Endereço: Rua Alecrim, n67, Rio Doce - Olinda </p>
              </li> */}
              <li>
                <p className="text-dark">Telefone: (81) 98365-9103</p>
              </li>
              <li>
                <p className="text-dark">E-mail: robson-ferreiradasilva@hotmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: '#6f42c1' }}>
        © {new Date().getFullYear()} Robson Ferreira
      </div>
    </footer>
  )
}

export default Footer