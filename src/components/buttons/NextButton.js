import React, {useContext}from 'react';
import {QuizContext} from '../../context/QuizContext';

const NextButton = () => {

const {submitted, nextClick} =  useContext(QuizContext)

    return (  <React.Fragment>
                    {submitted ? ( <button className="nextbutton" onClick={nextClick}>Next Question</button>): null}
                </React.Fragment>
    );
}
 
export default NextButton;