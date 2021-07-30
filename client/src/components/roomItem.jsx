import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/card'
import Colors from '../services/colors'
import { ReactComponent as TrashIcon } from '../icons/trash.svg'
import { ReactComponent as EditIcon } from '../icons/edit.svg'

const RoomItem = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '0.3rem'}}>
            <Link style={{textDecoration:'none', color: 'black'}} to={'/room/' + props.index}>
                <Card>
                    <h4 style={{margin:'0 0 1rem 0'}}>{props.name}</h4>
                    <p style={{margin:'0 0 1rem 0'}}>{props.path}</p>
                </Card>
            </Link>
            <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly', width: '100%', marginTop: '0.3rem'}}>
                <button onClick={props.edit} style={{backgroundColor: Colors.edtiColor, flexGrow: '4', border: 'none', borderRadius: '0.5rem', margin: '0 0.5rem 0 0.5rem'}}>
                    <EditIcon style={{margin:'0rem', width:'2.5rem'}} fill={Colors.editFontColor}/>
                </button>
                <button onClick={props.onDelete} style={{backgroundColor: Colors.warningColor, flexGrow: '1', border: 'none', borderRadius: '0.5rem', marginRight: '0.2rem'}}>
                    <TrashIcon style={{margin:'0.6rem', width:'1.5rem'}} fill={Colors.warningFontColor}/>
                </button>
            </div>
        </div>
    )
}

export default RoomItem