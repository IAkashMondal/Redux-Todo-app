import React from 'react'
import {handelAddActionObj,handelReduceActionObj} from "../Redux/action"
import {useDispatch,useSelector} from "react-redux"

const Counter = () => {
    const dispatch = useDispatch()
  const count= useSelector((store)=>{
    return store.count;
})
  return (
    <div>
           <header><h1>REDUX DAY 1</h1></header>
      <h5>MAX REACHED till 25</h5>
      <h3>Count: {count}</h3>
      <button onClick={()=>dispatch(handelAddActionObj(1))}>add</button>
      <button onClick={()=>dispatch(handelReduceActionObj(1))}>reduce</button>
    </div>
  )
}

export default Counter
