import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {

    console.log(op); // time details

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow} style={{backgroundColor : "green"}}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurent Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <ListGroup>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Monday : </span><span style={{color : "red"}}>{op?.Monday}</span> </ListGroup.Item>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Tuesday : </span><span style={{color : "red"}}>{op?.Tuesday}</span></ListGroup.Item>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Wednesday : </span><span style={{color : "red"}}>{op?.Wednesday}</span></ListGroup.Item>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Thursday : </span><span style={{color : "red"}}>{op?.Thursday}</span></ListGroup.Item>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Friday : </span><span style={{color : "red"}}>{op?.Friday}</span></ListGroup.Item>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Saturday : </span><span style={{color : "red"}}>{op?.Saturday}</span></ListGroup.Item>
                    <ListGroup.Item><span style={{color: "green",fontWeight : 600}}>Sunday : </span><span style={{color : "red"}}>{op?.Sunday}</span></ListGroup.Item>
                </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop