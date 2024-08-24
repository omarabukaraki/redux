import React from 'react'
import { decrementFuc, incrementFuc, resetFuc } from '../../redux/action/action';
import { useDispatch } from 'react-redux';

const Btns = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => {
                dispatch(incrementFuc())
            }} >Increment</button>
            <button onClick={() => {
                dispatch(decrementFuc())
            }}>Decrement</button>
            <button onClick={() => {
                    dispatch(resetFuc())
                }
            }>Reset</button>
        </>
    )
}

export default Btns
