import React, {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';

const SubmitButton = () => {

    const {
        checkAnswer,
        selected,
        submitted
    } = useContext(QuizContext)

    return ( 
            <React.Fragment>
                 {selected && !submitted ?  ( <button className={`submitbutton ${submitted ? 'disabled' : ''}`} onClick={checkAnswer}> Submit </button>)  : null }
             </React.Fragment>
     );
}
 
export default SubmitButton