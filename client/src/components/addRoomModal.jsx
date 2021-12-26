import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { Formik, Field, ErrorMessage, Form as FormMK } from 'formik'
import * as Yup from 'yup'

const validate = Yup.object({
    roomName: Yup.string().required('El nombre del cuarto es necesario'),
    path: Yup.string().matches(/^(ws:?)\/\/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{4}|\/ws)$/,
    'Ingrese una direccion correcta').required('La ruta es necesaria')
})

const AddDeviceModal = (props) => {
    return (
        <Modal
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.isEdit ? 'Modificar' : 'Agregar'} Dispositivo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={props.initialValues}
                    onSubmit={props.onSubmit}
                    validationSchema={validate}
                    >
                    {(formik) => (
                        <Col>
                            <FormMK>
                                <Col style={{padding: '0 1rem 1rem 1rem'}}>
                                    <Row>
                                        Nombre del cuarto: 
                                        <Field style={{margin: '0.5rem 0 0.5rem 0'}} type='text' name='roomName' autoComplete='off'/>
                                        <ErrorMessage name='roomName'/>
                                    </Row>
                                    <Row>
                                        Direccion (ws://127.0.0.1:8000): 
                                        <Field style={{margin: '0.5rem 0 0.5rem 0'}} type='text' name='path' autoComplete='off'/>
                                        <ErrorMessage name='path'/>
                                    </Row>
                                </Col>
                                <Modal.Footer>
                                    <Button type='submit'>{props.isEdit ? 'Modificar' : 'Agregar'}</Button>
                                    <Button onClick={props.onHide}>Cancelar</Button>
                                </Modal.Footer>
                            </FormMK>
                        </Col>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}
export default AddDeviceModal