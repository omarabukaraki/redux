import { ALLURERS } from "../type/userType"

const iniState =  {data:[]};
export const reducerUser = (state=iniState, action)=>{
    
    if(action.type === ALLURERS){
        return {type:ALLURERS,data:action.data}
    }if(action.type === 'oneUser'){
        return {type:'oneUser',data:[{name:'omar'}]}
    }
    return state;
}