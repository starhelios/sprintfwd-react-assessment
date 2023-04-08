import { useState } from 'react'

const Todo = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1)
  const [selectedItemContent, setSelectedItemContent] = useState('')

  const addNewItem = () => {
    setItems([...items, { content: newItem }])
    setNewItem('')
  }

  const updateItem = () => {
    items.splice(selectedItemIndex, 1, { content: selectedItemContent })
    setItems([...items])
    setSelectedItemIndex(-1)
  }

  const deleteItem = (index) => {
    items.splice(index, 1)
    setItems([...items])
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Todo list</h1>
      <div className="new-todo">
        <p>Add New Todo</p>
        <textarea
          rows={3}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <div className="new-todo-actions">
          <button className="action-btn danger" onClick={() => setNewItem('')}>Clear</button>
          <button className="action-btn primary" disabled={!newItem} onClick={addNewItem}>Add</button>
        </div>
      </div>
      <div className="todo-list">
        {items.map((item, index) => (
          <div className={selectedItemIndex === index ? 'todo-item edit' : 'todo-item'} key={index}>
            {selectedItemIndex === index ? (
              <textarea
                rows={3}
                value={selectedItemContent}
                onChange={(e) => setSelectedItemContent(e.target.value)}
              />
            ) : (
              <p>{item.content}</p>
            )}
            <div className="todo-actions">
              {selectedItemIndex === index ? (
                <>
                  <button className="action-btn primary" onClick={updateItem}>Confirm</button>
                  <button className="action-btn danger" onClick={() => setSelectedItemIndex(-1)}>Cancel</button>
                </>
              ) : (
                <>
                  <button
                    className="action-btn primary"
                    onClick={() => {
                      setSelectedItemIndex(index)
                      setSelectedItemContent(item.content)
                    }}
                  >
                    Edit
                  </button>
                  <button className="action-btn danger" onClick={() => deleteItem(index)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
