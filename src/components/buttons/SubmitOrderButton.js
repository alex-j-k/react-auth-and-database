import React, { useContext } from 'react';
import {QuizContext} from '../../context/QuizContext';

const SubmitOrderButton = ({checkOrderAnswer}) => {

    const {selected, setSubmitted, submitted} = useContext(QuizContext);


    

    return (  
        <React.Fragment>
             {selected && !submitted ? <button className="submitorderbutton" onClick={()=>setSubmitted(true)}>Submit</button>: null}
        </React.Fragment>
    );
}
 
export default SubmitOrderButton;