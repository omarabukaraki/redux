import { ALLURERS } from "../type/userType";

export const userAction = ()=>{

    return async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        dispatch({type:ALLURERS,data:data})
    }
}