import React, { useState } from 'react';

const TodoItem = ({ todo, index, onDelete, onToggle, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
  
    const handleEdit = () => {
      console.log("Murat");
      setIsEditing(true);
    };
  
    const handleSave = () => {
      onEdit(index, editedText);
      setIsEditing(false);
    };
  
    const handleCancelEdit = () => {
      setEditedText(todo.text);
      setIsEditing(false);
    };
  
    const handleInputChange = (e) => {
      setEditedText(e.target.value);
    };


  
    return (
      <li className={todo.done ? 'completed' : ''}>
        <div className="view">
          <input type="checkbox" className="toggle" checked={todo.done} onChange={() => onToggle(index)} />
          {isEditing ? (
            
            <input
              type="text"
              className="edit"
              value={editedText}
              onChange={handleInputChange}
              autoFocus
              onBlur={handleSave}
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              onKeyDown={(e) => e.key === 'Escape' && handleCancelEdit()}
            />
           
          ) : (
            <>
              <label onDoubleClick={handleEdit}>{todo.text}</label>
              <button className="destroy" onClick={() => onDelete(index)}></button>
            </>
          )}
        </div>
      </li>
    );
  };

  export default TodoItem;
  