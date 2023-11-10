import DynamicName from "./Body/DynamicName";
import Cart from "./Body/Cart";
import { useState } from "react";

const bodyStyle = {
  textAlign: 'center',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '10px',
};

const inputContainerStyle = {
 
  alignItems: 'center',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '8px',
  fontSize: '16px',
  alignItems: 'center',
  margin: '10px',
};

function Body() {
  const [count, setCount] = useState(0);
  const [customCount, setCustomCount] = useState(1);

  function clicked() {
    setCount(count + 1);
  }

  function takeInput(e) {
    const inputValue = Number(e.target.value);
    if (inputValue > 0) {
      setCustomCount(inputValue);
    } else {
      alert("Please input only positive numbers");
    }
  }

  return (
    <div className="Body" style={bodyStyle}>
      <DynamicName />
      <hr />
      <br />
      <br />
      <button style={buttonStyle} onClick={clicked}>
        Button
      </button>
      <p>`Button was clicked {count} times` </p>
      <div style={inputContainerStyle}>
        <input
          placeholder="1"
          type="number"
          min="1"
          style={inputStyle}
          onChange={takeInput}
        ></input>
        <button style={buttonStyle} onClick={() => setCount(Number(customCount))}>
          Set Custom Count
        </button>
      </div>
      <br />
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Cart />
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Body;
