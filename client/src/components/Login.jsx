import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      
      <div className='login'>
        <div className="email">
        <EmailIcon className='emicon'/>    <input type="email" placeholder='Enter Email'/>
        </div>
        <div className="pass">
        <LockIcon className='emicon'/><input type="password" placeholder='Enter Password'/>
        </div>
       
        <button className='login-btn'>Login</button>
      </div>
      
     
    </div>
  )
}

export default Login
