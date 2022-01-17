import React from 'react'
import Todo from './Todo'

function ToDoList({dataList}) {
    return (
     <ul >

     {dataList.map((todo)=>{

           return <Todo todo={todo} key={todo.id}/> 
           
     })}


     </ul>
    )
}

export default ToDoList
