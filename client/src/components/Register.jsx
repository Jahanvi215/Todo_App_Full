import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Register = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='login'>
        <div className="email">
        <EmailIcon className='emicon'/>    <input type="email" placeholder='Enter Email'/>
        </div>
        <div className="user">
        <PersonIcon className='emicon'/>    <input type="text" placeholder='Enter Username'/>
        </div>
        <div className="pass">
        <LockIcon className='emicon'/><input type="password" placeholder='Enter Password'/>
        </div>
       
        <button className='login-btn'>Register</button>
      </div>
      
     
    </div>
  )
}

export default Register
