import { useState } from 'react'
export function Input({label, value, onChange}){
    return (
      <label htmlFor = {label} >{label}*: <input
      type="text"
      value={value}
      id={label}
      name={label}
      onChange={onChange}
      required
    /></label>
    );
  }
  
  export function Text({placeholder, value, onChange}){
    return (
      <textarea
      name={placeholder}
      value={value}
      rows="5"
      cols="30"
      placeholder={placeholder}
      onChange={onChange}
      required> 
      </textarea>
    );
  }
  
  export function Duration() {
    const [isPresent, setIsPresent] = useState(false);
  
    function handlePresent() {
      setIsPresent(!isPresent);
    }
  
    return (
      <div className='duration'>
        <label>
          Start date:
          <input type="date" />
        </label>
        <span> - </span>
        <label>
          End date:
          <input id='endDate' type="date" disabled={isPresent} />
        </label>
        <label>
          Present:
          <input id='present' type="checkbox" onChange={handlePresent} checked={isPresent} />
        </label>
      </div>
    );
  }