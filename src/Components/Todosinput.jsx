import React from 'react'
import { useState } from 'react'

const Todosinput = ({AddTodos}) => {
    const[text,setText] = useState("");
const handelAdd=()=>{
if(text){
    AddTodos(text);
    setText("");
}
}
  return (
    <div>
      <input type="text" placeholder='write to add todos...'  autoFocus onChange={(e)=>e.target.value} />
      <button onClick={handelAdd} >Add</button>
    </div>
  )
}

export default Todosinput
