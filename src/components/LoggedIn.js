import React from 'react'
import QuizContextProvider from '../context/QuizContext'
import UserForm from '../form/UserForm'
import DatabaseOutput from './DatabaseOutput'
import Questions from './Questions'

const LoggedIn = () => {
    return (  
        <div className="loggedin">
            <h1>THANKS UR LOGGED IN</h1>
            <UserForm></UserForm>

                <QuizContextProvider>
                    <Questions></Questions>
                </QuizContextProvider>

        </div>
    );
}
 
export default LoggedIn;
<div className="loggedin">

</div>