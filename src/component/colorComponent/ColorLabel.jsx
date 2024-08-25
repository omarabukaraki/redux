import React from 'react'
import { useSelector } from 'react-redux'

const ColorLabel = () => {
    const colorData = useSelector(state => state.Color);
    const colorLocal = localStorage.getItem('color');

    return (
        <div style={{backgroundColor:(colorLocal === null ? colorData.color : colorLocal),width:'10rem',height:'10rem',margin:'10px',borderRadius:'10px'} }>
        </div>
    )
}

export default ColorLabel
