import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <main className='bg-dark vh-100 text-white'>
        <h1 className='text-center mb-5 pt-4'>Welcomt To Admin Home Page</h1>
        <div className='w-50 m-auto text-center'>
            <Link to={'/login'} className='me-2'>
            <Button variant="primary">Login</Button>
            </Link>
            <Link to={'/signup'}>
            <Button variant="primary">Sign up</Button>
            </Link>

            </div>        
        </main>
  )
}

export default Home