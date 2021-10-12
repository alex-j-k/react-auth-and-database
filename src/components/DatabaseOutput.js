import React, { useContext } from 'react';
import { DbUsersContext } from '../context/DbUsersContext';

const DatabaseOutput = () => {

  const {DbUsersList} = useContext(DbUsersContext);
  

    return ( 
            <div className="databaseoutput">
                <h1>Database output</h1>
                {!DbUsersList && <h2>Loading... Please Wait</h2>}


            {DbUsersList && <h3>{DbUsersList.length} People have taken the test so far!</h3>}
                
            </div>
     );
}
 
export default DatabaseOutput
