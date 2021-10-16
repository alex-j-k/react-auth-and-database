import React, {useContext} from 'react';
import {QuizContext} from '../context/QuizContext';
import DatabaseOutput from './DatabaseOutput';

const GameOver = () => {

    const {questionNumber, score, gameOver} = useContext(QuizContext);

    return ( 
        <React.Fragment>
        { gameOver && questionNumber !== 0 ? 
            (
        <div className="scoredisplay">
            <p className="questionnumber">Congratulations! The whole class has recieved a passing mark1</p>
            <p className="questionnumber">Your score was {score} from {questionNumber +1} questions.</p>
        </div>
            ) : null
        }
                <DatabaseOutput></DatabaseOutput>

        </React.Fragment>
     );
}
 
export default GameOver;