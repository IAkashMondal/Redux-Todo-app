import { ADD, GET_FAILURE, GET_LOADING, GET_SUCESS, POST_FAILURE, POST_LOADING, POST_SUCESS, REDUCE } from "./actionTypeCreater"

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
export const POST_TODOS_ADD_LOADING=()=>{
    return{
        type:POST_LOADING,

    }
}
export const POST_TODOS_ADD_SUCESS=(payload)=>{
    return({
        type:POST_SUCESS,
        payload,
        
    })
}
export const POST_TODOS_ADD_FAILURE=()=>{
    return({
        type:POST_FAILURE,
        
    })
}