import DynamicName from "./Body/DynamicName";
import Cart from "./Body/Cart"
import { useState } from "react";
const BodyStyle =  {

    'text-align': 'center',
    'textalign': 'center'
   
}


function Body() {
 
  const [count,setCount] = useState(0);
  
  function clicked () {
    setCount(count+1);
  }

  const [c,setC] = useState(1)

  function takeinput (e) {
  if (Number((e.target.value)) > 0) {
  
    return setC( Number((e.target.value)));
 }
  else {
    alert (" Please Input only Positive Numbers")
 }
}
  
    return (
      <div className="Body" style={BodyStyle}>
        
       <DynamicName/>
        
        <hr></hr>
        <button onClick={clicked}>Button</button>
        <p>`Button was clicked {count} times` </p>
        <button onClick={() => {setCount(0)}}>Reset</button>
        
        <input placeholder="1"  type="number"  min= '1' onChange={takeinput}></input>
        <button onClick = {()=>setCount(Number(c))}>Submit</button>
       
       <br /><br /><br />
       <hr></hr>
       <br /><br />
       <Cart/>
      <br /><br />
      <hr />
      </div>
    );
  }
  
  export default Body;
  