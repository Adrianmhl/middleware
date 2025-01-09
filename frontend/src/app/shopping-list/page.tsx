'use client';

import React, { useState } from 'react';
import { addShoppingItem, getShoppingItems, deleteShoppingItem } from '../../../utils/api';



export default function ShoppingList() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  interface ShoppingItem {
    id: number;
    name: string;
    quantity: number;
  }
  
  const [items, setItems] = useState<ShoppingItem[]>([]);


  const loadItems = async () => {
    try {
      const data = await getShoppingItems();
      setItems(data);
    } catch (err) {
      setError('Error fetching shopping items');
    }
  };

  const handleAddItem = async () => {
    if (!itemName.trim() || isNaN(quantity)) {
      alert('Please enter a valid name and quantity');
      return;
    }

    try {
      await addShoppingItem({ name: itemName.trim(), quantity: Number(quantity) });
      setItemName('');
      setQuantity(1); // Resette Werte nach erfolgreichem Hinzufügen
      loadItems();
    } catch (err) {
      setError('Error adding shopping item');
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await deleteShoppingItem(id);
      loadItems();
    } catch (err) {
      setError('Error deleting shopping item');
    }
  };

  React.useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (x{item.quantity})
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
