import React from 'react'

const States = ({setStates}) => {
    return ( 
        <select className='selectcountry' required name="state" onChange={(e)=> {setStates(e.target.value)}}>
                <option disabled selected value="Choose">Choose your state or territory...</option>

<option value="ACT">Australian Capital Territory</option>
<option value="NSW">New South Wales</option>
<option value="NT ">Northern Territory</option>
<option value="QLD">Queensland</option>
<option value="SA ">South Australia</option>
<option value="TAS">Tasmania</option>
<option value="VIC">Victoria</option>
<option value="WA ">Western Australia</option>
<option value="Other">Other</option>

</select>
    );
}
 
export default States;