import './App.css';
import React, { useState } from 'react';

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  const items = list.map((item, index) => <li key={index}>{item}</li>)

  const addItem = () => {
    if (input === "") return
    const search = list.find(item => item === input)
    if (search) return
    setList([...list, input])
    setInput("")
  }

  return (
    <>
      <h1 className="title">Todo List</h1>
      <input type="text" className="input" placeholder="list item here" value={input} onChange={e => setInput(e.target.value)} />
      <button className="button" onClick={() => addItem()}>Add Item</button>
      <ul className="list">
        {items.length > 0 ? items : "No items added yet"}
      </ul>
    </>
  );
}

export default App;
