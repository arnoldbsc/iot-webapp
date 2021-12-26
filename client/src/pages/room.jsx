import React, {useState, useEffect} from 'react'
import socket from '../services/connectionSocket'
import Switch from '../components/powerSwitch'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/header'

let newSocket

const Room = () => {
    const [fetchData, setFetchData] = useState([])
    const { id } = useParams()

    const handleClick = (data) => {
        newSocket.sendData(data)
    }

    const handleOpen = () =>{
        console.log('Conneccion exitosa')
    }
    
    const handleMessage = (data) => {
        console.log(data)
        if(data !== null){
            const dataToFetch = data.map((item, index) => {
                return <Switch key={index} onClick={handleClick} index={index} device={item.device} name={item.name} state={item.value}/>
            })
            setFetchData(dataToFetch)
        }
    }
    
    const handleClose = () => {
        console.log('Conneccion cerrada')
        setFetchData(
            <div style={{display:'flex', width:'100%', flexDirection:'column', alignItems:'center'}}>
                <h2>Se cerro la connexion</h2>
                <a href="javascript:location.reload()">Actualizar</a>
                <Link to='/'>Home</Link>
            </div>
        )
    }

    const handleError = (error) => {
        console.log(error)
    }
    
    useEffect(() => {
        console.log(JSON.parse(window.localStorage.getItem('roomsData'))[id].path)
        newSocket = new socket(JSON.parse(window.localStorage.getItem('roomsData'))[id].path, handleOpen, handleMessage, handleClose, handleError)
        newSocket.init()
        return () => {
            newSocket.closeConnection()
        }
    },[])
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly',flexDirection:'row', width:'100%'}}>
            <Header>{JSON.parse(window.localStorage.getItem('roomsData'))[id].roomName}</Header>
            {fetchData}
        </div>
    )
}

export default Room