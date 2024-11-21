import './App.css';
import { useState } from 'react'
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

const Logo = () => {
  return (
    <>
      <h1>🏖️ Packing Manager 👜</h1>
    </>
  )
}
const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1)


  const handelSubmit = (e) => {
    e.preventDefault()
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() }
    onAddItems(newItem)
    setDescription('')
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}</select>
      <input type='text' placeholder='item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}
const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) =>
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />)}
      </ul>
    </div>
  )
}

const Item = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
      <button style={{ fontSize: "4.5rem", color: "red" }} onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  )
}
const Stats = () => {
  return (
    <footer className='stats'>
      <em>👜 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

export default function App() {
  const [items, setItems] = useState([])
  const handelAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handelDeletedItem = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList items={items} onDeleteItem={handelDeletedItem} />
      <Stats />
    </div>
  )
};

