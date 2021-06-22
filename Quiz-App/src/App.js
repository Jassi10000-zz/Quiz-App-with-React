import React,{ useState } from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from './Helpers/Context';


function App() {

  // With help of Context Api , it shares different forms of data , globally
  // across the application and solve the problem of "Prop Drilling" 

  // will be treated as global state , as we're using Context Api
  const [gameState , setGameState ] = useState("menu");


  //  this state is created globally to keep a track of the score
  const [ score , setScore ] = useState(0);


  const [userName, setUserName] = useState("");



  return (
    <div className="App">
      <h1>Quiz App</h1>
    
      <QuizContext.Provider value={{gameState , setGameState , userName , setUserName, score , setScore }}>
        { gameState === "menu" && <MainMenu/> }
        { gameState === "playing" && <Quiz/> }
        { gameState === "finished" && <EndScreen/> }
      </QuizContext.Provider>

    </div>
  )
}

export default App;
