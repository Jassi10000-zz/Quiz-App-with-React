import React,{ useState , useContext } from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from './Helpers/context';


function App() {

  // With help of Context Api , it shares different forms of data , globally
  // across the application and solve the problem of "Prop Drilling" 

  // will be treated as global state , as we're using Context Api
  const [gameState , setGameState ] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
    
      <QuizContext.Provider value={{gameState , setGameState}}>
        { gameState === "menu" && <MainMenu/> }
        { gameState === "quiz" && <Quiz/> }
        { gameState === "end" && <EndScreen/> }
      </QuizContext.Provider>

    </div>
  )
}

export default App;
