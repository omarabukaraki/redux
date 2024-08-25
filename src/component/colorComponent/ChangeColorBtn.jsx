import React from 'react'
import { useDispatch } from 'react-redux'
import { blueAction, redAction } from '../../redux/action/colorAction';

const ChangeColorBtn = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ margin: '10px' }}>
      <button onClick={() => { dispatch(redAction()) }}>Red Color</button>
      <button onClick={() => { dispatch(blueAction()) }}>blue Color</button>
    </div>
  )
}

export default ChangeColorBtn
