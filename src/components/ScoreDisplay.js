import React, {useContext} from 'react';
import {QuizContext} from '../context/QuizContext';


const ScoreDisplay = () => {

    const {questionNumber, score, gameOver} = useContext(QuizContext);

    return (  
        <React.Fragment>
        { 
                !gameOver ? (
                <div className="scoredisplay">
                    <p className="todayslesson">Today's lesson: Ice-cream 101</p>
                    <p className="questionnumber">Question Number: {questionNumber +1}</p>
                <p className="score">You have answered correctly {score} out of {questionNumber}</p>
                </div>
                            ) : null
         }
        </React.Fragment>

    );
}
 
export default ScoreDisplay

