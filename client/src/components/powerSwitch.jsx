import React, {useState} from 'react';
import { ReactComponent as PowerIcon } from '../icons/power.svg'

const style = {
    switch: (boxShadow) => ({
        height: '8rem',
        width: '8rem',
        boxShadow,
        borderRadius: '50%',
        border: '5px solid #f5f5f5',
    }),
    title: {
        textAlign: 'center',
        marginTop: '0.5rem'
    }
}

const changeButton = (state) => {
    if(!state){
        return '10px 10px 15px rgba(0, 0, 0, 0.12)'
    }
    return '10px 10px 15px rgba(0, 0, 0, 0.12),inset -10px -10px 15px rgba(255, 255, 255, 0.5),inset 10px 10px 15px rgba(0, 0, 0, 0.12)'
}

const Switch = (props) => {
    const [state, setState] = useState(props.state)
    const isClick = () => {
        setState(!state)
        const data = {
            device : props.device,
            index: props.index,
            value: state
        }
        return data
    }
    const handleClick = () => {
        if(props.onClick !== undefined){
            props.onClick(isClick())
        }
        else{
            console.log(isClick())
        }
    }
    return (
        <div style={{display:'flex', flexDirection:'column', width:'8rem', margin:'1rem 1rem 0 1rem'}}>
            <button onClick={handleClick} style={style.switch(changeButton(state))}>
                {<PowerIcon style={{width:'3rem'}} fill={state ? '#aef2d5' : '#5ff032'}/>}
            </button>
            <h4 style={style.title}>{props.name}</h4>
        </div>
    )
}

export default Switch