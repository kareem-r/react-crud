import React ,{useState} from 'react'
import { Col, Container,Row , Card, Button } from 'react-bootstrap'
import axios from 'axios';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const [Password,setPassword]=useState('');
    const [Email,setEmail]=useState('');
    const [isloading , setisloadind]=useState(false)
  
    const [errorMessage , setErrorMessage] = useState('');
    const handlesubmit=()=>{
        let userDate={ Password , Email }
        setisloadind(true)
        axios.get("http://localhost:3000/admins/1").then(res=>{
          toast.success("admin logged in succ")
          setisloadind(false)

          navigate("/users")
        }).catch(e=>{
          toast.error(e.message)
          setisloadind(false)

        })

     
        
           
        }

    
    
  return (
<section className='mt-5 d-flex justify-content-center align-items-center'>
        <Container >
            <Row>
                <Col lg={6} className='offset-lg-3'>
<Card>
    <div className="card-header">
        <h1>login</h1>
    </div>
    <div className="card-body">
        <form action="">
        <Row>
        <Col lg='6' className="">
                <div className="form-group" >
                     <label htmlFor="">Email <span className='text-danger'>*</span></label>
                     <input type="email" className='form-control' value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
            </Col>
     
            <Col lg='6' className='d-block'>
                <div className="form-group">
                     <label htmlFor="">Password <span className='text-danger'>*</span></label>
                     <input type="password" className='form-control' value={Password} onChange={(e)=>setPassword(e.target.value)}required />
                </div>
            </Col>
      
           
        </Row>
        </form>
        
    </div>
    <div className="card-footer">
        <Button disabled={isloading?true:false} onClick={handlesubmit}>Login</Button>
    </div>
</Card>
                </Col>
            </Row>
           
            {errorMessage && <small className='text-center d-block  text-danger'>{"-"+errorMessage}</small>}
        </Container>



</section> 
 )
}

export default Login