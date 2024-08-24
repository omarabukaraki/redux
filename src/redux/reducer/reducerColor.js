import { BLUE, RED } from "../type/colorType";

export const reducerColor = (state={color:'black'},action)=>{
    if(action.type === RED){
        return {color:RED};
    }
    if(action.type === BLUE){
        return {color:BLUE};
    }
    return state;

}