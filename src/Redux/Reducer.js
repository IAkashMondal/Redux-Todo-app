import { ADD, GET_FAILURE, GET_LOADING, GET_SUCESS, REDUCE } from "./actionTypeCreater"

const initialState={
   count:10,
   IsLoading: false,
   todos:[],
   IsError: false,
}
const Reducer = (oldstate=initialState,action) => {
 switch(action.type){
   case ADD:
      let tempcount = oldstate.count + action.payload >= 25 ?25: oldstate.count + action.payload
      return ({...oldstate,count: tempcount})
   
   case REDUCE:{
      return ({...oldstate,count:oldstate.count - action.payload})
   }
   case GET_LOADING:
      return{...oldstate,IsLoading: true}
   
   case GET_SUCESS:{
      return({...oldstate,todos:action.payload,IsLoading:false})
   }
   case GET_FAILURE:{
      return({...oldstate,IsError: true,IsLoading:false})
   }

    default: return oldstate;
 }
}

export default Reducer
