import { ADD, GET_FAILURE, GET_LOADING, GET_SUCESS, REDUCE } from "./actionTypeCreater"

export const handelAddActionObj=(payload)=>{
    return{
        type: ADD,
        payload,
    }
}
 export const handelReduceActionObj=(payload)=>{
    return{
        type:REDUCE,
        payload,
    }
}
export const TODOS_LOADING=()=>{
    return{
        type:GET_LOADING,

    }
}
export const TODOS_SUCESS=(payload)=>{
    return({
        type:GET_SUCESS,
        payload,
        
    })
}
export const TODOS_FAILURE=()=>{
    return({
        type:GET_FAILURE,
        
    })
}