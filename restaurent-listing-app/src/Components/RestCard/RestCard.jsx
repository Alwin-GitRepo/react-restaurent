import React from 'react'
import Card from 'react-bootstrap/Card';
import './RestCard.css'
import { Link } from 'react-router-dom';



function RestCard({restaurents}) {
    console.log(restaurents);
  return (
    <div>
        <Link to={`/view/${restaurents.id}`} style={{textDecoration : 'none'}}>
                    <Card className='cls'>
            <Card.Img variant="top" src={restaurents.photograph} style={{height : 35 + "vh"}} />
            <Card.Body>
                <Card.Title className='fw-bold text-danger'>{restaurents.name}</Card.Title>
                <Card.Text>
                    {restaurents.address} <br />
                    <span className='text-warning'>Neighborhood : {restaurents.neighborhood}</span> <br />
                    <span className='text-success'>Cuisine type : {restaurents.cuisine_type}</span> <br />
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
    </div>
  )
}

export default RestCard