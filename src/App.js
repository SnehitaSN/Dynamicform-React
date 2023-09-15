import React, { useState } from "react"
import './App.css';

function App() {
  const [fields,setFileds] = useState([])

  function addField(){
    setFileds([...fields,""])
  }

  function handleChange(index,event){
    const newFields = [...fields]
    newFields[index]=event.target.value
    setFileds(newFields)

  }
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {fields.map((field,index)=>{
       return   <input key={index} type="text" placeholder={`Filed ${index+1}`}
        value={field}
        onChange={(event)=>{
          handleChange(index,event)
        }}/>
        })}
      </form>
      <button onClick={addField}>Add</button>
    </div>
  );
}

export default App;
