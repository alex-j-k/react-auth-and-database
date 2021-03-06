import React, { createContext, useState, useEffect } from 'react';
import Fire from '../components/Firebase';

export const DbUsersContext = createContext();




const DbUsersContextProvider = (props) => {

// CREATE STATE FOR USERLIST

    const [DbUsersList, setDbUsersList] = useState([]);
    


    useEffect(() => {

        const dbobject = Fire.database().ref('user');
    
                        dbobject.on('value', (snapshot) => {
                           console.log(snapshot.val());
    
                           const allData = snapshot.val();
                           const userList = [];
    
                           for (let single in allData){
                               userList.push(allData[single]);
                           }
    
                               console.log(userList);
                               setDbUsersList(userList);
    
                         });
               },[])



    return (
       <DbUsersContext.Provider value={{DbUsersList}}>
        {props.children}
       </DbUsersContext.Provider> 
    )
}


export default DbUsersContextProvider