import React from 'react'
import Colors from '../services/colors'
import { ReactComponent as BackIcon } from '../icons/back.svg'

const Header = (props) => {
  return (
    <div style={{display:'flex', alignItems:'center', backgroundColor: Colors.primaryColor, width:'100%', height:'5rem'}}>
      {window.location.pathname === '/' ? null : <button style={{margin: '1rem', position: 'absolute', backgroundColor: Colors.primaryColor, border:'none'}} onClick={() => {window.history.back()}}><BackIcon fill={Colors.acentColor} style={{width: '3rem'}}></BackIcon></button>}
      <h1 style={{color:Colors.primaryFontColor, textAlign:'center', width:'100%', margin:'0'}}>{props.children}</h1>
    </div>
  )
}

export default Header