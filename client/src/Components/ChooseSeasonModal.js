import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'


export default function ChooseSeasonModal(props){
    const { handleClose, showModal } = props

return(
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Body className='modal-body'>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                    <span aria-hidden="true" className="closeX">X</span>
                </button>
                <div>{props.children}</div>
            </Modal.Body>
            <Modal.Footer className='modal-footer footerQ'>
                <Button className='btn btn-primary btnQ' data-dismiss='modal' onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}