import React from 'react';
import { useState } from 'react';


const App = () => {
  // for buttons
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  // for input field
  let [count, setCount] = useState(1);

  let handleCountde = () => {
    if (count <= 1) {
      setCount(1)
    } else {
      setCount(count - 1)
    }
  }

  let handleCountin = () => {
    if (count >= 10) {
      setCount(10)
    } else {
      setCount(count + 1)

    }
  }
  // for on change event
  let [name, setName] = useState('')
  let handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div>
      {/* addition part */}
      <div>
        <h1> <span>{count1} </span> + <span>{count2} </span> = <span> {count1 + count2} </span> </h1>
        <button onClick={() => setCount1(count1 + 1)}>Number 1</button>
        <button onClick={() => setCount2(count2 + 1)}> Number 2</button>
      </div>
      <br />
      {/* input field */}
      <div>
        <button onClick={handleCountde}> - </button>
        <input type='number' value={count} />
        <button onClick={handleCountin}> + </button>
      </div>
      <br />
      {/* on change event */}
      <div>
        <p>Is this your name: <b>{name}</b></p>
        <input type='text' value={name} onChange={handleChange} />
      </div>
    </div>
  );
};

export default App;