// import { useState } from 'react'
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
  
  export function Duration({ startDate, endDate, isPresent, onStartDateChange, onEndDateChange, onPresentChange }) {
    return (
      <div className='duration'>
        <label>
          Start date:
          <input type="date" value={startDate} onChange={(e) => onStartDateChange(e.target.value)} />
        </label>
        <span> - </span>
        <label>
          End date:
          <input type="date" value={endDate} onChange={(e) => onEndDateChange(e.target.value)} disabled={isPresent} />
        </label>
        <label>
          Present:
          <input type="checkbox" checked={isPresent} onChange={onPresentChange} />
        </label>
      </div>
    );
  }