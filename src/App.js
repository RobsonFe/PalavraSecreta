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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickedWordAndCategory = () =>{

    //Pegando as categorias

    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)]; 


    //Pegando as palavras

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    
    return {word, category}

  }

  //inicio do Jogo
  const startGame = () => {

    //Pegar palavras e categorias

   const {word, category} = pickedWordAndCategory();
   
   //criando uma lista de letras 

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());
    
    console.log(word, category);
    console.log(wordLetters);

    //Setar os estados

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

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
