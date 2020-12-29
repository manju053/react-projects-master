import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, 'enter name of the item', 'danger');
    } else if(name && isEditing) {
      // edit item
      const index = list.findIndex(item => item.id === editID);
      const newList = [...list];
      newList[index].title = name ;
      setList(newList);
      showAlert(true, 'item updated successfuly', 'success');
      setName('');
      setEditID(null);
      setIsEditing(false);

    } else {
      // add to list
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'item added to the list', 'success');
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  };

  const removeAlert = () => {
    showAlert();
  };

  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
    showAlert(true, 'item deleted from the list', 'success');
  };

  const clearList = () => {
    setList([]);
    showAlert(true, 'items cleared from the list', 'success');

  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <div className="grocery-container">
        <form onSubmit={handleSubmit} className="grocery-form">
          {alert.show && <Alert msg={alert.msg} type={alert.type} removeAlert={removeAlert} list={list}/>}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input type="text" className="grocery" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="e.g. eggs"/>
            <button type="submit" className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        <List items={list} setIsEditing={setIsEditing} setEditID={setEditID} setName={setName} deleteItem={deleteItem}/>
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
    </section>
  )
}

export default App
