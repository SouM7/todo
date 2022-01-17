import React from 'react'
import Sun from './Components/images/sun.svg'
import Moon from './Components/images/moon.svg'
import {useState} from 'react'
import {useEffect} from 'react' 
import axios from 'axios'
import '../src/App.css'
import ToDoList from './Components/ToDoList'
import Form from './Components/Form'



function App() {
  
  const [theme, setTheme] = useState("light")
  const [darklight, setDarklight]= useState(Moon)
  const [dataList, setData] = useState([]);
 

useEffect(() => {

  let mounted = true;

  if(mounted){
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => {
      setData(response.data);
      console.log(dataList)
    })
  }
  

  

  return () => {
    mounted=false;
  }
}, [])

 
 
  const toggleTheme =() => {

    setTheme(theme === 'light' ? 'dark' : 'light')
    setDarklight(darklight === Moon ? Sun : Moon)

  }

 /*const addtask =(userInput)=>{
    dataList.push({id: dataList.langth+1, title: userInput, completed : false})
  }*/
  

  const addtask =(userInput)=>{

  if(userInput.trim("").length>1){

    let copy=[...dataList, {id: dataList.length+1, title: userInput, completed: false}]

    setData(copy);
  } 

  else
  {
    alert("Please enter TO DO !!")
  }

  }

  return (
    <div className='App' data-theme={theme}>

   <div className='container'>

     <header>
      <h1> TO DO </h1>
      <button onClick={toggleTheme}>
          <img src={darklight} alt=""/>
      </button>
    </header>
    <Form  addtask={addtask}/>
    <ToDoList className="form" dataList={dataList}/>


      </div>
      
    </div>


  )
}

export default App
