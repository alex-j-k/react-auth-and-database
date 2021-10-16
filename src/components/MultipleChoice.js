import React, {useContext} from 'react';
import {QuizContext} from '../context/QuizContext';

import SubmitButton from './buttons/SubmitButton';
import UnselectButton from './buttons/UnselectButton';
import NextButton from './buttons/NextButton';

const MultipleChoice = ({
    question,
}) => {

const {
    lockInAnswer,
    selected,
    submitted
}  = useContext(QuizContext)

    return ( 
        <div className="multiplechoice">
            <div className="text">{question.text}</div> 
            <UnselectButton></UnselectButton>
            
            {question.answers.map(answer =>  <button 
            className={`multiplechoicebutton ${selected == answer ? 'selected' : ''} ${selected ? 'disabled' : ''} ${submitted && answer == question.correctAnswer ? 'correct' : submitted && answer == selected ? 'incorrect' : ''}`} 
            key={answer} value={answer} onClick={lockInAnswer}
            
            > {answer}</button>)}
            <NextButton></NextButton>
            <SubmitButton></SubmitButton>
              
        </div>
     );
}
 
export default MultipleChoice;