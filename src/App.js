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
import {wordsList} from './data/words.js';
import Game from './components/Game.js';
import GameOver from './components/GameOver.js';

// Estagios do Jogo

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: "end"},
];

const guessedQty = 7;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessedQty);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = useCallback(() =>{

    //Pegando as categorias

    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)]; 


    //Pegando as palavras

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    
    return {word, category}

  }, [words]);

  //inicio do Jogo
  const startGame = useCallback (() => {

    //Limpar campos do jogo

    clearLetterStates();

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
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickedWordAndCategory]);

  //Processo de colocar as letras

  const verifyLetter = (letter) => {
    // setGameStage(stages[2].name)

    const normalizeLetter = letter.toLowerCase();

    //Se a letra já foi utilizada

    if(guessedLetters.includes(normalizeLetter) || 
      wrongLetters.includes(normalizeLetter))
      {
        return;
      }

      // coloque as letras digitadas ou remova as tentativas

      if(letters.includes(normalizeLetter)){
        setGuessedLetters((actualGuessedLetters)=>[

          ...actualGuessedLetters,
          normalizeLetter
        ]);
      } else {

        setWrongLetters((actualWrongLetters)=>[
          ...actualWrongLetters,
          normalizeLetter
        ]);

        setGuesses((actualGuesses) => actualGuesses -1);
      }
  };

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
};

//Se eu ganho



  useEffect(()=>{
    if(guesses <= 0){

      // apagar todos os estados
  
      clearLetterStates();
  
      setGameStage(stages[2].name)
    }
  }, [guesses])

  //condição de vitoria

  useEffect(()=>{

    const uniqueLetters = [...new Set(letters)];

    //vitoria

    if(guessedLetters.length === uniqueLetters.length){
      // adicionar pontuação 

      setScore((actualScore) => actualScore += 100)

      // reiniciar o jogo do zero

      startGame();
    }

  }, [guessedLetters, letters, startGame])

  const retry = () => {

    setScore(0);
    setGuesses(guessedQty);

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

  {gameStage === "game" && <Game 
    verifyLetter={verifyLetter} 
    pickedWord={pickedWord} 
    pickedCategory={pickedCategory} 
    letters={letters} 
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}
    /> }

  {gameStage === "end" && <GameOver retry={retry} score={score}/>}

    </div>
  );
}

export default App;
