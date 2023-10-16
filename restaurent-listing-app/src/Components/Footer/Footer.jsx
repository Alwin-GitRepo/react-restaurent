import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <div>      
        <Navbar className="body-tertiary bg-info">
            <Container className='text-center'>
              <Navbar.Brand href="#home" className='nav'>
                  <span className='fw-bold fs-6'>All Rights are Reserved Under Resto Cafe : <span className='text-danger'>restocafe@gmail.com</span></span>
              </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Footer