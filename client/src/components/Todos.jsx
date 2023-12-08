import React from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const Todos = () => {
  return (
    <div className="Todos">
      <div className="singleTodo">
        <div>
        <input type="checkbox" />
        <span>Learn React</span>
        </div>
        <div>
        <select name="complete" id="selectb">
          <option value="completed">completed</option>
          <option value="in-progress">In-progress</option>
          <option value="onhold">Onhold</option>
        </select>
        </div>
        <div>
        <BorderColorIcon className="trashIcon"/>
        <DeleteIcon className="trashIcon"/>
        </div>
              </div>
    
      <div className="singleTodo">
        <div>
        <input type="checkbox" />
        <span>Learn Java  .</span>
        </div>
        <div>
        <select name="complete" id="selectb">
          <option value="completed">completed</option>
          <option value="in-progress">In-progress</option>
          <option value="onhold">Onhold</option>
        </select>
        </div>
        <div>
        <BorderColorIcon className="trashIcon"/>
        <DeleteIcon className="trashIcon"/>
        </div>
              </div>
    
    </div>
  );
};

export default Todos;
