import React from 'react';
import { useState } from 'react';

const ulStyle = { 'listtype': "none",
};



function Cart() {
    const [goods, setGoods] = useState([
        {
        id: 1,
        name: "Mobile",
        added: true,
    },
    {
        id: 2,
        name: "Laptop",
        added: true,
    },
    {
        id: 3,
        name: "Tablet",
        added: true,
    },] );


function handleCheck ({good}) {
    const upGoods = goods.map( (item) => good.id === item.id? {...item, added: !(item.added)}: item);
    setGoods(upGoods)

}
function handleCart (good) {
    return (
        
        <li key={good.id} style= {ulStyle}>
            <input type='checkbox' checked={good.added} onChange={() => handleCheck({good})}></input>
           
            {good.name}
            
            <button>Delete</button>
       
       </li>
        
    )

}

  return (
    <div>
        <ul>
        {goods.map( (good) => handleCart(good) )}
        </ul>
    </div>
  )
  }

export default Cart