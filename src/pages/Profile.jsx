import React, { useState ,useEffect } from 'react'
import { useParams  } from 'react-router-dom'
import axios from 'axios';
import {toast } from 'react-toastify';
import { Col, Container,Row , Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const Profile = () => {
    const [profiles , setprofiles]=useState([]);
 
    
    const {id}=useParams();
    const getdata=()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res=>{setprofiles(res.data)
        })
        .catch(err=>toast.error(err.message))
      }
 useEffect(()=>{getdata();},[])
 console.log(profiles.userName)
     

      
 
  return (
    <section className='mt-5 d-flex justify-content-center align-items-center'>
    <Container >
        <Row>
            <Col lg={6} className='offset-lg-3'>
<Card>
<div className="card-header">
    <h1>My Profile</h1>
</div>
<div className="card-body">
    <Row>
        <Col lg='8'>
            <div >
                <p>userName is : {profiles.userName}</p>
              
            </div>
        </Col>
        <Col lg='8'>
            <div >
            <p>Email is : {profiles.email}</p>
                 
            </div>
        </Col>
        <Col lg='8' className="">
            <div >
            <p>Country is : {profiles.country}</p>
            </div>
        </Col>
       
      
       
    </Row>
    
</div>
<div className="card-footer">
 <Link to={"/users"}> <Button>Back to Users</Button></Link>   
</div>
</Card>
            </Col>
        </Row>
       
    </Container>



</section> 
        
  )
}

export default Profile