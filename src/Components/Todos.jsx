import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Todosinput from './Todosinput'
import axios from "axios"
import { useEffect } from 'react';
import { TODOS_FAILURE, TODOS_LOADING, TODOS_SUCESS } from '../Redux/action';

const Todos = () => {
    const dispatch = useDispatch();
    const {todos,IsLoading,IsError} = useSelector((store)=>{
        return({
            todos:store.todos,
            IsLoading:store.IsLoading,
            IsError:store.IsError
        })
    })
    const GetTodos=()=>{
        dispatch(TODOS_LOADING())
        axios.get("http://localhost:8080/todos")
        .then((r)=>dispatch(TODOS_SUCESS(r.data)))
        .catch((e)=>dispatch(TODOS_FAILURE()))
    }
    useEffect(()=>{
        GetTodos()
    },[])
  return (
    <div>
        <header><h1>REDUX DAY 2</h1></header>
        <label>TODOS</label>
        <Todosinput/>
        <br/>
        <>
        {
            todos.length >0 && todos.map((item)=>
            <h5 key={item.id}>{item.title} - {item.status ? "true" : "false"}</h5>)
        }</>
    </div>
  )
}

export default Todos
