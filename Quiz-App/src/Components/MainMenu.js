import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";

function MainMenu() {

     const { gameState , setGameState , userName , setUserName } = useContext(QuizContext);

    return (
        <div className="Menu">
            <label>Enter your name : </label>
            <input type="text"  placeholder="Ex. John Doe" onChange={(event) => {setUserName(event.target.value)}}/>
            <button onClick={() => {setGameState("playing")}}> Start Quiz </button>
        </div>
    )
}

export default MainMenu;



