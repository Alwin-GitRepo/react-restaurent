import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RestCard from '../RestCard/RestCard' // imported child from parent
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function AllRest() {

  // to hold all restaurent details as in the form of array
  const [allRestaurent,setAllRestaurent] = useState([])

  const fetchData = async () => {
  const response = await axios.get('http://localhost:3001/restaurants')
  console.log(response.data);
  setAllRestaurent(response.data)
  }
  console.log(allRestaurent);

  useEffect(() => {
    fetchData() // function call
  },[])
  return (
    <div>
      <Row>
        {
        allRestaurent.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}><RestCard restaurents={item}/></Col>
        ))
        }
      </Row>
    </div>
  )
}

export default AllRest