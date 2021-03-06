import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext';

const LogOutButton = () => {
    const {uid, logMeOut} = useContext(AuthContext)

    return ( 
                <React.Fragment>
                        {
                        
                         
                        
                        
                        uid ? 
                            (
                                <button 
                                className="logout"
                                onClick={() => {logMeOut()}}
                                >LOGOUT</button>
                            )
                        :
                                (
                            <div className="notloggedin">
                                You are not logged in...
                            </div>
                                )


                            }
                </React.Fragment>
     );
}
 
export default LogOutButton;