import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';
import Restreview from '../Restreview/Restreview';

function ViewRest() {

    // get path parameter
    // const pathParameter = useParams()
    // console.log(pathParameter.id);

    // destructure parameters
    const {id}=useParams()
    console.log(id);

    const [RestDetails,SetRestDetails] = useState({})

    // API call for getting particular restaurent details 
    const fetchData = async () => {
        const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data)
        SetRestDetails(data)
    }
    console.log(RestDetails);
    useEffect(() =>{
        fetchData();
    },[])
  return (
    <div>
        <Row>
            <Col>
                <img src={`${RestDetails.photograph}`} alt="" style={{width : "20rem",height :" 30rem",margin : "2rem"}}/>
            </Col>
            <Col style={{marginTop : "8rem",marginRight : "7rem"}}>
                <ListGroup  style={{gap : "1rem"}}>
                    <ListGroup.Item>Name : {RestDetails.name}</ListGroup.Item>
                    <ListGroup.Item>Address : {RestDetails.address}</ListGroup.Item>
                    <ListGroup.Item>Cuisine Type : {RestDetails.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item>Neighborhood : {RestDetails.neighborhood}</ListGroup.Item>
                    <Restop op={RestDetails.operating_hours}/>
                    <Restreview rev={RestDetails.reviews}/> 
                </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default ViewRest