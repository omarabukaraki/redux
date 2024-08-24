import React from 'react'
import { useSelector } from 'react-redux'

const AuthLabel = () => {
    const data = useSelector(state =>state.RedAuth)
    
    return (
   <h2>{data.isLog !== true ? 'user Logout': 'user Login'}</h2>
  )
}

export default AuthLabel
