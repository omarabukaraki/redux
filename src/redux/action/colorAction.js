import { BLUE, RED } from "../type/colorType";

export const redAction =()=>{
    localStorage.setItem('color',RED);
    return {type:RED};
}
export const blueAction =()=>{
    localStorage.setItem('color',BLUE);
    return {type:BLUE};
}