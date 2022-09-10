import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Todosinput from './Todosinput'
import axios from "axios"
import { useEffect } from 'react';
import { POST_TODOS_ADD_FAILURE, POST_TODOS_ADD_LOADING, POST_TODOS_ADD_SUCESS, TODOS_FAILURE, TODOS_LOADING, TODOS_SUCESS } from '../Redux/action';

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
        return axios.get("http://localhost:8080/todos")
        .then((r)=>dispatch(TODOS_SUCESS(r.data)))
        .catch((e)=>dispatch(TODOS_FAILURE()))
    }
    const addtodos =(title)=>{
        if(title){
            const payload={
                title,
                status:false
            }
            dispatch(POST_TODOS_ADD_LOADING())
                return  axios.post("http://localhost:8080/todos",payload)
            .then((r)=>dispatch(POST_TODOS_ADD_SUCESS(r.data)))
            .catch((e)=>dispatch(POST_TODOS_ADD_FAILURE()))

        }
    }
    useEffect(()=>{
        GetTodos()
    },[])
    const handeladdtodos=(text)=>{
        addtodos(text).then(()=>GetTodos());
    }
  return (
    <div>
        <header><h1>REDUX DAY 2</h1></header>
        <label>TODOS</label>
        <Todosinput handeladdtodos={handeladdtodos}/>
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
