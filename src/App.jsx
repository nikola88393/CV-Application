import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './App.css'

export const sections = {
  name: 'Name',
  address: "Address",
  intro: 'Introduce yourself',
  school: 'School name',
  major: 'Major',
  schoolDescr: 'Major description',
  employer: 'Company name',
  activity: 'Field of work',
  workDescr: 'Work descritpion'
}

export function Header() {
  return(
    <div className='header'>
      <div className='logo'>
        <FontAwesomeIcon icon={faFile} />
        <h1>CV Maker</h1>
      </div>
    </div>
  )
}

function Input({label}){
  const [value, setValue] = useState('');

  return (
    <label htmlFor = {label} >{label}*: <input
    type="text"
    value={value}
    id={label}
    name={label}
    onChange={(event) => setValue(event.target.value)}
    required
  /></label>
  );
}

function Text({placeholder}){
  const [value, setValue] = useState('');

  return (
    <textarea
    name={placeholder}
    value={value}
    rows="5"
    cols="30"
    placeholder={placeholder}
    onChange={(event) => setValue(event.target.value)}
    required> 
    </textarea>
  );
}

export function InputSection({input1, input2, input3}){
  return(
    <div className='inputSection'>
      <Input label={input1}></Input>
      <Input label={input2}></Input>
      <Text placeholder={input3}></Text>
      <div className='sectionControls'>
        <button>Edit</button>
        <button>Submit</button>
      </div>
    </div>
  )
}

