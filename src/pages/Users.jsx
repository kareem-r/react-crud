import React , {useState , useEffect } from 'react'
import {FiEdit} from "react-icons/fi"
import{MdOutlineDelete} from "react-icons/md"
import Form from '../components/reusable/Form'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';
import {BsFillEyeSlashFill} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Users = () => {
  const[showform ,setshowform]=useState(false)
  const[showedit,setshowedit]=useState(false)
  const[users , setusers]=useState([]);
  const [userdata , setuserdata]=useState({});
  console.log(users)
  const getdata=()=>{
    axios.get('http://localhost:3000/users')
    .then(res=>setusers(res.data))
    .catch(err=>toast.error(err.message))
  }
  useEffect(()=>{
   getdata()
  },[showform , showedit])
  const handleEdit=(user)=>{
    setuserdata(user)
    setshowedit(true)

  }
  const handledelete=(id)=>{
    if(window.confirm("are you sure to delete ?")){
      axios.delete(`http://localhost:3000/users/${id}` )
      .then(res=>{toast.success('user deleted successfully')
    getdata();
  }
    )
      .catch(err=>{toast.error(err.message)})
    }
   
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 vh-100 bg-secondary " style={{borderRight:"1px solid #000"}}>
            <h4 className='mt-4 text-center text-white-50'>Admin Dashboard</h4>
            <hr className='text-white' />
            <button onClick={()=>{setshowform(true)}} className='btn btn-danger btn-sm d-block mt-5 w-50 m-auto'>Add user</button>
{
 (showform) && <Form show={showform} setshow={setshowform} />
 }
 {
 (showedit) && <Form  showedit={showedit} setshowedit={setshowedit} userdata={userdata}/>
 } 
          </div>
          <div className="col-lg-9">
            <table className='table-hover table table-striped'>
<thead>
  <tr>
    <th>name</th>
    <th>email</th>
    <th>country</th>
  </tr>
</thead>
<tbody>
{
      users.map((item , index)=>(
        <tr key={index}>
 <td>{item.userName}</td>
    <td>{item.email}</td>
    <td>{item.country}</td>
    <td><FiEdit className='text-info' style={{cursor:"pointer"}} onClick={()=>handleEdit(item)}/></td>
    <td><MdOutlineDelete className='text-danger' style={{cursor:"pointer"}} onClick={()=>{handledelete(item.id)}}/></td>
    <td>
    <Link to={`${item.id}`}><BsFillEyeSlashFill className='text-info' style={{cursor:"pointer"}}/></Link>
      </td>
        </tr>
      ))
    }

</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users