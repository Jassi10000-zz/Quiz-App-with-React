import React,{ useState , useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from "../Helpers/Questions";

function Quiz() {

    const { score , setScore , setGameState } = useContext(QuizContext);

    const [ QuesNo , setQuesNo ] = useState(0);
    const [ OptionChosen , setOptionChosen ] = useState("");

    const nextQuestion = () => {
        if(Questions[QuesNo].answer === OptionChosen){
            setScore(score+1);
        }
        setQuesNo(QuesNo+1);
    };

    const finishQuiz = () => {
        // check if the final ques also has the right ans , we have to increment score there also
        if(Questions[QuesNo].answer === OptionChosen){
            setScore(score+1);
        }

        setGameState("endScreen");
    }

    const chooseOption = (option) => {
        setOptionChosen(option);
      };

    return (
        <div className="Quiz">
            <h1>{Questions[QuesNo].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[QuesNo].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[QuesNo].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[QuesNo].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[QuesNo].optionD}</button>
            </div>

            {QuesNo === Questions.length-1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (<button onClick={nextQuestion}>NextQues</button>)}

        </div>
    );
};

export default Quiz;
