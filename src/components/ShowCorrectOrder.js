import React, {useContext} from 'react';
import { QuizContext } from '../context/QuizContext';

const ShowCorrectOrder = ({correct}) => {

    const {questionList, 
        questionNumber,
        submitted,
        
    } = useContext(QuizContext);

    return ( 
        <React.Fragment>
        { submitted && !correct && questionList[questionNumber].type == 'dragndrop' ? (

            <ul className='showcorrectorder'>
                <p>Unlucky! The correct order is...</p>
                        {
                                questionList[questionNumber].correctAnswer.map(answer => {
                              return  <li  className={`multiplechoicebuttondragndrop correct`}>{answer}</li>
                                })
                         }   
            </ul>
    



    ): null

        }
        </React.Fragment>
     );
}
 
export default ShowCorrectOrder;