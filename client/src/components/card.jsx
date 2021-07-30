import React from 'react'
import colors from '../services/colors'

const style = {
    backgroundColor: '#e8e8e8',
    borderRadius:'0.2rem',
    margin:'0.5rem',
    padding:'1rem',
    boxShadow: `0.25rem 0.25rem 0.25rem ${colors.shadowColor}`
}

const Card = (props) => {
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Card