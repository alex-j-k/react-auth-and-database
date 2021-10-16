import React, { useState, useEffect, useContext } from 'react';
import { DbUsersContext } from '../context/DbUsersContext';

import Countries from './Countries';
import States from './States';
import Fire from '../components/Firebase';

const UserForm = () => {
//HISTORICAL USERS LIST FROM DATABASE
    const {DbUsersList} = useContext(DbUsersContext);
//IS USERNAME ALREADY TAKEN IN DATABASE
    const [userNameAvailable, setUserNameAvailable] = useState(true);

//INDIVIDUAL ASPECTS OF USER
    const [userName, setUserName] = useState();
    const [age, setAge] = useState();
    const [city, setStates] = useState();
    const [country, setCountry] = useState();
    const [pet, setPet] = useState();
    const [colour, setColour] = useState();
    const [flavour, setPizza] = useState();
//COMBINED USER OBJECT
    const [user, setUser] = useState();

//FUNCTION DEFINED TO SUBMIT TO DATABASE 
    const addToDb = () => {
        Fire.database().ref('user').push(user);
        console.log('added')
    }

//ON SUBMIT COMBINE STATE INTO USER 
    const handleSubmitCreateUser = (e) => {
        e.preventDefault();
        setUser({userName, age, city, country, pet, colour, flavour})
        console.log(user);
        e.target.reset();
    }
//ON SUBMIT FORM AND USER CREATION - ADD TO DATABASE
useEffect(() => {
    addToDb()
}, [user])

//CHECK IF USERNAME IS ALREADY TAKEN BY OTHERS IN DATABASE

useEffect(() => {
   for (var i = 0; i < DbUsersList.length; i ++){
        if (DbUsersList[i].userName == userName) {
            console.log('y'); setUserNameAvailable(false); break} else {
                setUserNameAvailable(true);
            }
    }
}, [userName, DbUsersList ])


    return ( 


        <React.Fragment>
        <form className='userform' onSubmit={handleSubmitCreateUser}>
            <div className="username">
                    <label className='username' htmlFor="username">User-Name</label>
                    <input className='usernameinput' type="text" required id='username' placeholder='Please choose a username...' onChange={(e)=> setUserName(e.target.value)}/> 
            </div> 

            <div className="avail">
                    <label>{!userNameAvailable ? 'Your current ***username is already taken.*** Please Choose another...' :  'Your username is available'}</label>
            </div>

            <p className='age'>Age</p>

            <div className="radioanswers">
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='0-15' onChange={(e) => {setAge(e.target.value)}} value='0-15' />
                        <label className="circle" htmlFor="0-15">0-15</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='15-30' onChange={(e) => {setAge(e.target.value)}} value='15-30' />
                        <label className="circle" htmlFor="15-30">15-30</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='30-45' onChange={(e) => {setAge(e.target.value)}} value='30-45' />
                        <label className="circle" htmlFor="30-45">30-45</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='45-60' onChange={(e) => {setAge(e.target.value)}} value='45-60' />
                        <label className="circle" htmlFor="45-60">45-60</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='60+' onChange={(e) => {setAge(e.target.value)}} value='60+' />
                        <label className="circle" htmlFor="60+">60+</label>
                    </div>
            </div>

            <p className='labels'>Country</p>
            <Countries setCountry={setCountry}></Countries>

            <p className='labels'> States</p>
            <States setStates={setStates}></States>

            <p className='labels'>Dog vs Cat</p>

            <div className="petanswers">
                    <input className='dot' name={pet} type="radio" id='dog' value='dog' onChange={(e) => {setPet(e.target.value)}}/>
                    <label className='circle' htmlFor="dog">Dog Lover</label> <br/>
                    <input id='cat' className='dot' name={pet} type="radio" id='cat' value='cat' onChange={(e) => {setPet(e.target.value)}}/>
                    <label className='circle' htmlFor="cat">Cat Lover</label>
            </div>

            <p className='colour'>Colour</p>
            <select className='selectcountry' required name="colour" onChange={(e)=> {setColour(e.target.value)}}>
            <option disabled selected value="Choose">Choose your favourite colour...</option>

                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
             </select>

             <p  className='slidingtext'>On a sliding scale, how likey are you to agree with the statement:</p>
             <p className='colour'>0 left - 100 right</p>

             <p className='colour'>"Pineapple belongs on pizza"</p>
                <input className='slider' required type="range" id='pizza' min='0' max='100' onChange={(e) => {setPizza(e.target.value)}}/>


          <button className='submitform'  disabled={!userNameAvailable ? true : false}>Submit</button>
        </form>



        </React.Fragment>
     );
}
 
export default UserForm;