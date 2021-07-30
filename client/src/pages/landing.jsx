import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Content from '../components/content'
import RoomItem from '../components/roomItem'
import colors from '../services/colors'
import AddRoomModal from '../components/addRoomModal'
import { ReactComponent as PlusIcon } from '../icons/plus.svg'

let data = JSON.parse(window.localStorage.getItem('roomsData'))

const styles = {
  button: {
    cursor:'pointer', position:'fixed',
    top:'calc(100% - 5rem)',
    left:'calc(100% - 5rem)',
    boxShadow:`0.25rem 0.25rem 0.25rem ${colors.shadowColor}`,
    border:'none',
    borderRadius:'2rem',
    width:'4rem',
    backgroundColor:colors.secondaryColor
  }
}

let initialData = {
  roomName: '',
  path: 'ws://'
}

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [toFetch, setToFetch] = useState('Loading...')
  const [isEdit, setIsEdit] = useState(false)
  const [editIndex, setEditIndex] = useState()
  const [initData, setInitData] = useState(initialData)

  const handleClick = () => {
    setIsEdit(false)
    setShowModal(true)
  }

  const handleSubmit = (values) => {
    if(isEdit){
      Object.assign(data, {[editIndex]: values})
    } else {
      if(data !== null){
        Object.assign(data, {[Object.keys(data).length]: values})
      }
      else{
        data = Object.assign({}, {0: values})
      }
    }
    window.localStorage.setItem('roomsData', JSON.stringify(data))
    fetchData()
    setShowModal(false)
  }

  const handleEdit = (value) => {
    setInitData(data[value])
    setEditIndex(value)
    setIsEdit(true)
    setShowModal(true)
  }

  const handleDelete = (item) => {
    const middle = Object.assign({}, data)
    delete middle[item]
    const toReturn = {}
    let indexCount = 0
    Object.keys(middle).map(index => {
      Object.assign(toReturn, {[indexCount]: middle[index]})
      indexCount += 1
    })
    data = toReturn
    window.localStorage.setItem('roomsData', JSON.stringify(data))
    fetchData()
  }

  const fetchData = () => {
    if(data !== null){
      const fetch = Object.keys(data).map(index => {
        return(
          <RoomItem key={index} onDelete={() => handleDelete(index)} edit={() => handleEdit(index)} index={index} name={data[index].roomName} path={data[index].path}/>
        )
      })
      setToFetch(fetch)
    }
    else{
      setToFetch('No se encontraron datos')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Header>Inicio</Header>
      <Content>
        <AddRoomModal isEdit={isEdit} onSubmit={handleSubmit} initialValues={initData} show={showModal} onHide={() => setShowModal(false)}></AddRoomModal>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly',flexDirection:'row', width:'calc(100vw - 1rem)'}}>
          {toFetch}
        </div>
      </Content>
      <button onClick={handleClick} style={styles.button}>
        <PlusIcon style={{margin:'0.7rem', width:'2rem'}} fill={colors.acentColor}/>
      </button>
    </div>
  );
}

export default LandingPage