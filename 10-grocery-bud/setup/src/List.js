import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, setIsEditing, setEditID, setName, deleteItem}) => {
  console.log("items", items);
  return (
    <div className="grocery-list">
      {
        items.map(item => {
          const {id, title} = item;
          return (
            <article className="grocery-item" key={item.id}>
              <p className="title">{title}</p>
              <div className="btn-container">
                <button className="edit-btn" onClick={() => {setIsEditing(true); setEditID(id); setName(title)
                
                }}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => {deleteItem(id)}}>
                  <FaTrash />
                </button>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default List
