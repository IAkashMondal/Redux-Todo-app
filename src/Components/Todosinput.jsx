import React from 'react'
import { useState } from 'react'

const Todosinput = ({handeladdtodos}) => {
    const[text,setText] = useState("");
const handelAdd=()=>{
if(text){
  handeladdtodos(text);
    setText("");
}
}
  return (
    <div>
      <input value={text} type="text" placeholder='write to add todos...'  autoFocus onChange={(e)=>setText(e.target.value)} />
      <button onClick={handelAdd} >Add</button>
    </div>
  )
}

export default Todosinput
