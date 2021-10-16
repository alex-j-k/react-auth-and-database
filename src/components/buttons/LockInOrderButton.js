import React, {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';

const LockInOrderButton = () => {

const {setSelected, selected}  = useContext(QuizContext);



    return (  
        <React.Fragment>
           {!selected ? ( <button className={`lockinorderbutton`}  onClick={()=>setSelected(true)}>Lock-In the order</button>) : null  }
        </React.Fragment>
    );
}
 
export default LockInOrderButton
