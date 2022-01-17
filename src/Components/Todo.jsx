import React from 'react'
import {useState} from 'react'





function Todo({todo,handleToggle,cross}) {

    const[classy, setClassy]= useState("uncrossed");
    const [count, setCount]=useState(0);


const handleComplete=()=>{

if(todo.completed){

    todo.completed = false;
    setClassy('uncrossed')
    
} else{

    todo.completed = true;
    setClassy('crossed');
}

console.log(todo.completed, classy);

}


 return (
    
           <li onClick={handleComplete} className={classy}> {todo.title} </li>
        
    )
}

export default Todo
