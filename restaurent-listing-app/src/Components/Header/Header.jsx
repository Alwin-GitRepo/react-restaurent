import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="body-tertiary bg-info">
        <Container>
          <Navbar.Brand href="/">
            <i class="fa-solid fa-utensils me-3 fs-3"></i>
            <span className='fw-bolder fs-3 text-danger'>Resto Cafe</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header