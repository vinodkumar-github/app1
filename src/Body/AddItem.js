import { useState } from 'react';


export default function AddItem({goods,setGoods}) {
  const [newItem, setNewItem] = useState('');
  
  function handleAddItem() {
    
    if (newItem !== '' && !goods.some(good => String(good.name).toLowerCase() === String(newItem).toLowerCase())) {
      const newArray = [...goods, {
        id: goods.length + 1, 
        name: newItem,
        added: true,
      }];
      setGoods(newArray);
      setNewItem(''); 
    }
  }
  
  return (
    <>
      <label>
        New Item:
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
      <button type='submit' onClick={handleAddItem }> ADD</button>
      </label>
      
      {newItem !== ''  && !goods.some(good => String(good.name).toLowerCase() === String(newItem).toLowerCase()) && 
        <p>Newly added Item is {newItem}.</p>}
     {newItem !== '' && goods.some(good => String(good.name).toLowerCase() === String(newItem).toLowerCase())&& 
        <p>Item {newItem} already exists. <br/>!Addition of this Item cant be done!</p> }
    </>
  );
}
