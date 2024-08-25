import { combineReducers } from "redux";
import { reducerCounter } from "./reducerCounter";
import { reducerAuth } from "./reducerAuth";
import { reducerColor } from "./reducerColor";
import { reducerPost } from "./reducerPost";


export const rootReducer = combineReducers({
   Counter:reducerCounter,
   RedAuth:reducerAuth,
   Color:reducerColor,
   redPost:reducerPost
})