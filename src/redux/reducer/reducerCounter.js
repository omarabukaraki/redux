import { DECREMENT, INCREMENT, RESET } from "../type/type"

// 2- create reducer 
export const reducerCounter = (state ={counter:0},action)=>{
    if(action.type === INCREMENT){
       return {counter:state.counter +1}
    }else if(action.type === DECREMENT){
       return {counter:state.counter -1}
    }else if(action.type === RESET){
      return {counter:0}
    }
    return state;
}