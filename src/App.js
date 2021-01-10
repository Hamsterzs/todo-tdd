import './App.css';
import React from 'react';
import AppLogic from './AppLogic';

function App() {
  const { input, setInput, items, addItem } = AppLogic()

  return (
    <>
      <h1 className="title">Todo List</h1>
      <input type="text" className="input" placeholder="list item here" value={input} onChange={e => setInput(e.target.value)} />
      <button className="button" onClick={addItem}>Add Item</button>
      <ul className="list">
        {items.length > 0 ? items : "No items added yet"}
      </ul>
    </>
  );
}

export default App;
