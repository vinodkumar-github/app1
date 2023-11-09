import React from 'react'
import { useState } from 'react';

const names = ['Vinod', 'Kumar', 'Salina', 'Vicky'];




function DynamicName() {

    const [name, setName] = useState('Click to Select a Random name');
    function Dynamicness () {
        const int = Math.floor(Math.random()*4);
      return  setName(`Random name selected is ` + (names[int])) 
    }

  return (
    <>
    <button onClick = {Dynamicness} > "Click Here" </button>
    <div> {name}</div>
    </>
  );
}

export default DynamicName
