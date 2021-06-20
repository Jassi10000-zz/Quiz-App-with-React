import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import "../App.css";

export default function MainMenu() {

     const { gameState , setGameState } = useContext(QuizContext)

    return (
        <div className="Menu">
            <button onClick={() => {setGameState("quiz")}}> Test Button </button>
        </div>
    )
}




