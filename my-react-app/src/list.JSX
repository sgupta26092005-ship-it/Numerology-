import React from "react";
import './LIST.css';
import Item from "./Item";
import { useState } from "react";

function LIST() {
  const [list, setList] = useState([])
    const [input, setInput] = useState("")   
    const addItem = () => {
    if (input.trim() !== "") {
      const newItemObj = {
        id: list.length + 1,
        name: input,
      };
      setList([...list, newItemObj]);
      setInput("");
    }
  };
    return (
    <div className="list-container">
      <h2>My List</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {list.map((item) => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default LIST;