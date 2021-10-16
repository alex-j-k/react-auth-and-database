import React, {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';

const UnselectButton = () => {

    const {setSelected, selected, submitted} = useContext(QuizContext)

    return ( 
            <React.Fragment>
                 {selected && !submitted ?  ( <button className='unselectbutton' onClick={() => setSelected('')}> Unselect </button>)  : null }

             </React.Fragment>
     );
}
 
export default UnselectButton