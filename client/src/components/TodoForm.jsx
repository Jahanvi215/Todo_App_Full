import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';

const TodoForm = () => {
    const[text, setText] = useState("");

    const OnFormSubmit =() =>{

    }

    const OnInputChange =(e) =>{
        setText(e.target.value);
    }
  return (
    <div className='todoform'>
      <h3>What do you want to do today ?</h3>
      <form action="" onSubmit={OnFormSubmit()}>
      <input type="text" className='input' placeholder='Enter what to do...'  onChange={OnInputChange}/>
      <button><AddIcon className='plusIcon'/></button>
      </form>
    </div>
  )
}

export default TodoForm
