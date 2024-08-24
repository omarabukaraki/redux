import React from 'react'
import { useSelector } from 'react-redux';

const LabelCounter = () => {
  const data = useSelector(state=> state.Counter);

  return (
    <h1>Counter : {data.counter}</h1>
  )
}

export default LabelCounter

