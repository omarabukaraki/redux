// import { useDispatch, useSelector } from "react-redux";

import ColorLabel from "./colorComponent/ColorLabel";
import AuthButton from "./component/authComponent/AuthButton";
import AuthLabel from "./component/authComponent/AuthLabel";
import ChangeColorBtn from "./component/colorComponent/ChangeColorBtn";
import Btns from "./component/counterComponent/Btns";
import LabelCounter from "./component/counterComponent/LabelCounter";



function App() {
  // 4- access data from store reducer with useSelector/ use to get data
  // const data = useSelector(state=> state)

  // 5- use to update and change the data 
  // const dispatchCounter = useDispatch()

  // function incrementFuc(){
  //   dispatchCounter({type:'increment'});
  // }
  // function decrementFuc(){
  //   dispatchCounter({type:'decrement'});
  // }
  // function resetFuc(){
  //   dispatchCounter({type:''});
  // }
  
  return (
  <>
     <LabelCounter/>
     <Btns/>
     <AuthLabel/>
     <AuthButton/>
     <ColorLabel/>
     <ChangeColorBtn/>
  </>

  );
}

export default App;
