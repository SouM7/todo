import React from 'react'
import {useState} from 'react'

function Form({addtask}) {

const [userInput, setUserInput] = useState("");

const handleChange =(e)=>{

    setUserInput(e.target.value)
}




const handleSubmit = (e) => {
    e.preventDefault();
    addtask(userInput);
    setUserInput("");
}

return (

<form onSubmit={handleSubmit}>

              <input value={userInput} onChange={handleChange} type="text" placeholder='Create your to do '/>
              <input type="submit" className='submit'/>

</form>
   
)
}

export default Form
