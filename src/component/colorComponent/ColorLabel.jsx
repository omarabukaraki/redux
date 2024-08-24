import React from 'react'
import { useSelector } from 'react-redux'

const ColorLabel = () => {
    const colorData = useSelector(state => state.Color);

    return (
        <div style={{backgroundColor:colorData.color,width:'10rem',height:'10rem'} }>
        </div>
    )
}

export default ColorLabel
