import React from 'react';
import './Input.css';

function Input({setInput}) {
  const inputRef = React.createRef();
  
  return (
    <div>
      <input ref={inputRef} placeholder='enter a title'/><br></br>
      <button className="btn" onClick={() => setInput(inputRef.current.value)}>Update</button>
    </div>
  );
}

export default Input;