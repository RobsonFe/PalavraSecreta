/* eslint-disable no-unused-vars */


// Estilo do Projeto
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Tela Inicial do Projeto / Components 
import StartScreen from './components/StartScreen';
import NavBar from './components/NavBar.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';

//React
import { useCallback, useEffect, useState } from 'react';

// Dados
import {wordList, wordsList} from './data/words.js';
import Game from './components/Game.js';
import GameOver from './components/GameOver.js';

// Estagios do Jogo

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: "end"},
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //inicio do Jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  //Processo de colocar as letras

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App row">

{gameStage === "start" && (
  <>
    <NavBar />
    <StartScreen startGame={startGame} />
    <Section />
    <Footer />
  </>
    )}

  {gameStage === "game" && <Game verifyLetter={verifyLetter} /> }

  {gameStage === "end" && <GameOver retry={retry}/>}

    </div>
  );
}

export default App;
