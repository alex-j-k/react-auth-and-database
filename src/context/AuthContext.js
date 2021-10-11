import React, { createContext, useState } from 'react';
import firebase from 'firebase';
import firebaseApp from '../components/Firebase';


export const AuthContext = createContext();


const AuthContextProvider = (props) => {

    //STORE  user ID in state
    const [uid, setUid] = useState(null);

// STORE UID
    const authHandler = async (authData) => {
        console.log(authData);
        setUid({uid: authData.user.uid});
        console.log(uid);
    }

    //FUNCTION to autheticate user - get provider from button 
   const  authenticate = (provider) =>{
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(authHandler);
   };

    // LOGOUT
    const logMeOut = async () => {
        console.log('logging out');
        setUid({uid: null});
        await firebase.auth().signOut();
        
        }

    return(
        <AuthContext.Provider value={{uid, authenticate, logMeOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider