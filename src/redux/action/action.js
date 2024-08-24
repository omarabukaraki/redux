import { DECREMENT, INCREMENT, RESET } from "../type/type";


export const incrementFuc = ()=>{
    return {
        type:INCREMENT,
    }
}
export const decrementFuc = ()=>{
   return {type:DECREMENT}
}
export const resetFuc = ()=>{
   return {type:RESET}
}