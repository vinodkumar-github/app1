import React, { useState } from 'react';

function DynamicColour() {
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
    <br />
      <svg width="301" height="301">
        <rect width="300" height="300" style={{ display: 'block', margin: '0 auto', fill: color }} />
      </svg>
      <br /> <br />
      <input style={{ display: 'block', margin: '0 auto', width: '30%', height:'10%' }}
        placeholder='Enter the HTML Color name...'
        value={color}
        onChange={handleColorChange}
      />
      <br />
    </>
  );
}

export default DynamicColour;
