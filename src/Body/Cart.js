import React, { useState } from 'react';

// CSS styles
const cartStyle = {
  maxWidth: '80%',
  margin: '0 auto',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
};

const checkboxStyle = {
  transform: 'scale(2)', 
};

const deleteButtonStyle = {
  padding: '8px 12px',
  background: 'red',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

function Cart() {
  const [goods, setGoods] = useState([
    {
      id: 1,
      name: 'Mobile',
      added: true,
    },
    {
      id: 2,
      name: 'Laptop',
      added: true,
    },
    {
      id: 3,
      name: 'Tablet',
      added: true,
    },
  ]);

  function handleCheck(good) {
    const upGoods = goods.map((item) =>
      good.id === item.id ? { ...item, added: !item.added } : item
    );
    setGoods(upGoods);
  }
  function handleDelete(good) {
    const upGoods = goods.filter((item) =>
      good.id !== item.id
    );
    setGoods(upGoods);
  }

  function handleCart(good) {
    return (
      <li key={good.id} style={listItemStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={good.added}
            onChange={() => handleCheck(good)}
            style={checkboxStyle}
          />
          <span style={{ marginLeft: '40px' }}>{good.name}</span>
          </div>
        <button style={deleteButtonStyle} onClick={()=> handleDelete(good)}>Delete</button>
        
      </li>
    );
  }

  return (
    <div style={cartStyle}>
      <ul>{goods.map((good) => handleCart(good))}</ul>
    </div>
  );
}

export default Cart;
