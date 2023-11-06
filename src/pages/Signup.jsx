import React ,{useState} from 'react'
import { Col, Container,Row , Card, Button } from 'react-bootstrap'
import axios from 'axios';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const [Name,setName]=useState('');
    const [Password,setPassword]=useState('');
    const [Email,setEmail]=useState('');
    const [Phone,setPhone]=useState('');
    const [Country,setCountry]=useState('');
    const [Gender,setGender]=useState('');
    const [errorMessage , setErrorMessage] = useState('');
    const handlesubmit=()=>{
        let userDate={Name , Password , Email , Phone , Country , Gender}

     
        
            axios.post("http://localhost:3000/admins",userDate).then(res=>{
                toast.success("User Registered Successfully ! ")
                    navigate("/login")
                    
            
            }).catch(err=>{
                toast.error(err.message)
            })
        }

    
    
  return (
<section className='mt-5 d-flex justify-content-center align-items-center'>
        <Container >
            <Row>
                <Col lg={6} className='offset-lg-3'>
<Card>
    <div className="card-header">
        <h1>User Register</h1>
    </div>
    <div className="card-body">
        <form action="">
        <Row>
            <Col lg='6'>
                <div className="form-group">
                     <label htmlFor="">user Name <span className='text-danger'>*</span></label>
                     <input type="text" className='form-control' value={Name} onChange={(e)=>setName(e.target.value)  } required/>
                </div>
            </Col>
            <Col lg='6'>
                <div className="form-group">
                     <label htmlFor="">Password <span className='text-danger'>*</span></label>
                     <input type="password" className='form-control' value={Password} onChange={(e)=>setPassword(e.target.value)}required />
                </div>
            </Col>
            <Col lg='6' className="mt-3">
                <div className="form-group" >
                     <label htmlFor="">Email <span className='text-danger'>*</span></label>
                     <input type="email" className='form-control' value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
            </Col>
            <Col lg='6' className='mt-3'>
                <div className="form-group">
                     <label htmlFor="">Phone <span className='text-danger'>*</span></label>
                     <input type="text" className='form-control' value={Phone} onChange={(e)=>setPhone(e.target.value)}required />
                </div>
            </Col>
            <Col lg='12'>
                <div className="form-group">
                     <label htmlFor="">Country <span className='text-danger'>*</span></label>
                     <select className='form-control'value={Country} onChange={(e)=>setCountry(e.target.value)} required>
                        <option value="">Please Select Country</option>
                        <option value="Egypt">Egypt</option>
                        <option value="England">England</option>
                        <option value="German">German</option>
                     </select>
                </div>
            </Col>
            <Col lg='12' className='mt-3'>
                <div className="form-group">
                     <label htmlFor="" className='me-2'>Gender : <span className='text-danger'>*</span></label>
                    <input type="radio" name='gender' value={"Male"} className='form-check-input me-2'   onChange={(e)=>setGender(e.target.value) }required />
                    <label htmlFor="Male">Male</label>
                    <input type="radio" name='gender' value={"Female"} className='form-check-input me-2' onChange={(e)=>setGender(e.target.value)} required/>
                    <label htmlFor="Female">Female</label>
                </div>
            </Col>
        </Row>
        </form>
        
    </div>
    <div className="card-footer">
        <Button onClick={handlesubmit}>Sign up</Button>
    </div>
</Card>
                </Col>
            </Row>
           
            {errorMessage && <small className='text-center d-block  text-danger'>{"-"+errorMessage}</small>}
        </Container>



</section> 
 )
}

export default Signup