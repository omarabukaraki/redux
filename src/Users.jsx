import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './redux/action/userAction';

const Users = () => {
    const dispatch = useDispatch();
    
     useEffect(()=>{
        dispatch(userAction());
     },[])
    const selector = useSelector(state=>state.redUsers);
   
  return (
   <>
    {selector.data.map((user,index)=>{
        return <div key={index}>{user.name}</div>
    })}
   </>
  )
}

export default Users
