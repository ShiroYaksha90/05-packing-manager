import './App.css';
import { useState } from 'react'
import { Logo } from './Logo';
import { Form } from './Form';
import { Stats } from './Stats';
import { PackingList } from './PackingList';

export default function App() {
  const [items, setItems] = useState([])
  const handelAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handelDeletedItem = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }

  const handelToggeledItem = (id) => {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handelClearList = () => {
    const confermid = window.confirm("Are you sure you want to delete all items?")
    if (confermid) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList items={items} onDeleteItem={handelDeletedItem} onCheckboxToggle={handelToggeledItem} onClearList={handelClearList} />
      <Stats items={items} />
    </div>
  )
} 