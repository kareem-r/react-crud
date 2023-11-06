import React , {useState , useEffect} from 'react'
import {AiOutlineClose} from "react-icons/ai"
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';
import{AiFillEdit} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'


const Form = ({show , setshow , showedit , setshowedit ,userdata}) => {
  const[userName , setuserName]=useState("");
  const[email , setemail]=useState("");
  const[country , setcountry]=useState("");
  const onsubmit=(e)=>{
    e.preventDefault()
    if(userdata){
      let useredit={userName , email , country}
      axios.put(`http://localhost:3000/users/${userdata.id}` , useredit)
      .then(res=>{toast.success('user updated successfully')
    setshowedit(false)})
      .catch(err=>{toast.error(err.message)})

    }else{
      let userData={userName , email , country}
      axios.post('http://localhost:3000/users' , userData)
      .then(res=>{toast.success('user added successfully')
    setshow(false)})
      .catch(err=>{toast.error(err.message)})

    }


  }
  useEffect(()=>{
    if(userdata){
      setuserName(userdata.userName)
      setemail(userdata.email)
      setcountry(userdata.country)
    }
  },[userdata])
  return (
   
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center' style={{position:"fixed" ,top:"0",left:"0",backgroundColor:"rgba(0,0,0,.85)"}}>
  
        <div className='bg-danger w-50 vh-50 p-3 text-center' style={{position:"relative"}}>
            <h4 className='text-white text-center mb-5 mt-4'>{show ?<div>add new user <AiOutlineUserAdd></AiOutlineUserAdd></div>   : <div>Edit user <AiFillEdit></AiFillEdit></div> } </h4>
            <form onSubmit={onsubmit}>
                <input type="text" className='d-block mb-3 m-auto px-4 py-1 border-0   w-50 m-auto form-control' placeholder='User name' onChange={(e)=>{setuserName(e.target.value)}}value={userName} />
                <input type="email" className='d-block mb-3 m-auto px-4 py-1 border-0  w-50 m-auto form-control' placeholder='Email' onChange={(e)=>{setemail(e.target.value)}}value={email}  />
                <select className=' w-50 m-auto form-control'onChange={(e)=>{setcountry(e.target.value)}} value={country} >
                    <option value="">select country</option>
                    <option value="Egypy">Egypy</option>
                    <option value="England">England</option>
                    <option value="German">German</option>
                </select>
                <input type="submit" className='btn btn-outline-light mt-4 mb-2' value={show? "Add" :("update") } />
                <div  style={{cursor:"pointer",position:"absolute",top:"10px",right:"30px"}} className='text-white' >< AiOutlineClose onClick={()=>{show && setshow(false)
             showedit &&   setshowedit(false)}}/></div>

            </form>

        </div>

    </div>
  )
}

export default Form