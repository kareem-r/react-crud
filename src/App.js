import './App.css';
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import Users from './pages/Users';
import { ToastContainer} from 'react-toastify';
import Profile from './pages/Profile';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navigate to={"/"}/>} />

<Route path='/' element={<Home/> }/>
<Route path='/login' element={<Login/> }/>
<Route path='/signup' element={<Signup/> }/>
<Route path='/users' element={<Users/> }/>
<Route path='/*' element={<Notfound/> }/>
<Route path='users/:id' element={<Profile></Profile>} />


    </Routes>
    </BrowserRouter>
    <ToastContainer/>
   </>
  );
}

export default App;
