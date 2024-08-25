// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthButton from "./component/authComponent/AuthButton";
import AuthLabel from "./component/authComponent/AuthLabel";
import ChangeColorBtn from "./component/colorComponent/ChangeColorBtn";
import ColorLabel from "./component/colorComponent/ColorLabel";
import Btns from "./component/counterComponent/Btns";
import LabelCounter from "./component/counterComponent/LabelCounter";
import PostPage from "./post_page/PostPage";
import Home from "./home/Home";



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
      {/* <LabelCounter/>
     <Btns/>
     <AuthLabel/>
     <AuthButton/>
     <ColorLabel/>
     <ChangeColorBtn/> */}
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/postPage"} element={<PostPage/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
