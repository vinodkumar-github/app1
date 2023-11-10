import React from 'react'
import { useState } from 'react';

const names = ['Vinod', 'Kumar', 'Salina', 'Vicky'];

const clickStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '10px',
};

const divStyle = { fontSize: '16px', fontFamily: 'Candara, sans-serif', fontWeight: 'bold', color: '#333', margin: '10px 0' };



function DynamicName() {

    const [name, setName] = useState('Click to Select a Random name');
    function Dynamicness () {
        const int = Math.floor(Math.random()*4);
      return  setName(`Random name selected is: ` + (names[int])) 
    }

  return (
    <>
    <br /><br />
    <button onClick = {Dynamicness} style={clickStyle} > "Click Here" </button>
    <br /> <br />
    <div style={divStyle}> {name}</div>
    <br /><br />
    </>
  );
}

export default DynamicName
