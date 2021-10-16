import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';


const PleaseLogIn = () => {

    const { authenticate} = useContext(AuthContext);

    return ( 
        <div className="pleaselogin">
        <h1>Choose your account</h1>

        <button 
        className="github"
        onClick={() => authenticate('Github')}>
        Log In With Github
        </button>

        <button 
        className="facebook"
        onClick={() => authenticate('Facebook')}>
        Log In With Facebook
        </button>

        <button 
        className="anonymous"
        onClick={() => authenticate('Anonymous')}>
        Log In Anonymously
        </button>

    </div>
     );
}
 
export default PleaseLogIn