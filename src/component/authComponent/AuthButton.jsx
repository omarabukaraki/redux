import React from 'react'
import { useDispatch } from 'react-redux'

const AuthButton = () => {
   const dispatch = useDispatch();

   const login = ()=>{
    dispatch({type:'isLogin'});
   }

   const logout = ()=>{
    dispatch({type:'isNotLogin'});
   }
  return (
    <>
     <button onClick={login} >Login</button>
     <button onClick={logout}>Logout</button>
    </>
  )
}

export default AuthButton
