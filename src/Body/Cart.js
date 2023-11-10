import React, { useState } from 'react';
import './Cart.css';
import AddItem from './AddItem';

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
    return setGoods(upGoods);
  }

  function handleCart(good) {
    return (
      <React.Fragment key={good.id}>
        <li className="list-item">
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={good.added}
              onChange={() => handleCheck(good)}
              className="checkbox"
            />
            <label className="span-name" htmlFor='checkbox' onDoubleClick={() => handleCheck(good)}>
              {good.name}
            </label>
          </div>
          <button className="delete-button" onClick={() => handleDelete(good)}>
            Delete
          </button>
        </li>
      </React.Fragment>
    );
  }
  

  return (
    <div id="cart">
       <AddItem goods ={goods} setGoods = {setGoods} />
      <ul>{goods.map((good) => handleCart(good))}</ul>
    </div>
  );
}

export default Cart;