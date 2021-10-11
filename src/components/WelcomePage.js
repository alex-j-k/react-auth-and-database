import React, {useContext, useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import LoggedIn from './LoggedIn';
import PleaseLogIn from './PleaseLogIn';
import LogOutButton from './LogOutButton';

const WelcomePage = () => {

    const {uid, logMeOut} = useContext(AuthContext)


    return (  

        
        <div className="WelcomePage">
            <h1>Welcome!</h1>
            <LogOutButton></LogOutButton>
                             <React.Fragment>
            {   
                //    useEffect(() => {
                       
                                            !uid ? 
                                                (
                                                    <PleaseLogIn></PleaseLogIn>
                                                )
                                            :

                                                (
                                                    <LoggedIn></LoggedIn>
                                                )
                                                
                                //   }, [])

            }
                            </React.Fragment>
        </div>
    );
}
 
export default WelcomePage
