import React, { useState, useEffect } from 'react';
import Countries from './Countries';
import States from './States';
import Fire from './Firebase';

const UserForm = () => {
    const [userName, setUserName] = useState();
    const [age, setAge] = useState();
    const [city, setStates] = useState();
    const [country, setCountry] = useState();
    const [pet, setPet] = useState();
    const [colour, setColour] = useState();
    const [flavour, setPizza] = useState();

    const [user, setUser] = useState();

    //SUBMIT TO DATABASE FUNCTION
    const addToDb = () => {
        Fire.database().ref('user').push(user);
        console.log('added')
    }

    //COMBINE STATE INTO USER 
    const handleSubmitCreateUser = (e) => {
        e.preventDefault();
        setUser({userName, age, city, country, pet, colour, flavour})
        console.log(user);
        e.target.reset();
    }
//On user change add to Database
// useEffect(() => {
//     addToDb()
// }, [user])



    return ( 


        <React.Fragment>
        <button onClick={addToDb}>add to db</button>
        <form onSubmit={handleSubmitCreateUser}>
            <label htmlFor="username">User-Name</label>
            <input type="text" required id='username' placeholder='Please type your user-name here...' onChange={(e)=> setUserName(e.target.value)}/>
            
            <p>Age</p>
            <div className="radio">
                <input type="radio" id='0-15' onChange={(e) => {setAge(e.target.value)}} value='0-15' />
                <label htmlFor="0-15">0-15</label>
            </div>
            <div className="radio">
                <input type="radio" id='15-30' onChange={(e) => {setAge(e.target.value)}} value='15-30' />
                <label htmlFor="15-30">15-30</label>
            </div>
            <div className="radio">
                <input type="radio" id='30-45' onChange={(e) => {setAge(e.target.value)}} value='30-45' />
                <label htmlFor="30-45">30-45</label>
            </div>
            <div className="radio">
                <input type="radio" id='45-60' onChange={(e) => {setAge(e.target.value)}} value='45-60' />
                <label htmlFor="45-60">45-60</label>
            </div>
            <div className="radio">
                <input type="radio" id='60+' onChange={(e) => {setAge(e.target.value)}} value='60+' />
                <label htmlFor="60+">60+</label>
            </div>

            <p>Country</p>
            <Countries setCountry={setCountry}></Countries>

            <p>States</p>
            <States setStates={setStates}></States>

            <p>Dog vs Cat</p>
            <input type="checkbox" id='dog' value='dog' onChange={(e) => {setPet(e.target.value)}}/>
            <label htmlFor="dog">Dog Lover</label>
            <input type="checkbox" id='cat' value='cat' onChange={(e) => {setPet(e.target.value)}}/>
            <label htmlFor="cat">Cat Lover</label>


            <p>Colour</p>
            <select required name="colour" onChange={(e)=> {setColour(e.target.value)}}>
            <option disabled selected value="Choose">Choose your favourite colour...</option>

                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
             </select>

             <p>On a sliding scale, how likey are you to agree with the statement:</p>
             <p>"Pineapple belongs on pizza"</p>
                <input required type="range" id='pizza' min='0' max='100' onChange={(e) => {setPizza(e.target.value)}}/>

                <button>Submit</button>
        </form>



        </React.Fragment>
     );
}
 
export default UserForm;