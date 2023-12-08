import React from 'react'
import Image from "../assets/create.png"

const Header = () => {
  return (
   
    <div className='header'>
      
        <img src={Image} alt="" />
      <a href="/"><h1>TODOER</h1></a>
      
    </div>
    
  )
}

export default Header
