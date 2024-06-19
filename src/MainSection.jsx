import { useState } from 'react'
import { Input, Text } from './Inputs'
import './App.css'
export function MainSection({cb}){
    const [data, setData] = useState({
      name: '',
      email: '',
      phone: '',
      intro: ''
    })
  
    function handleSubmit(){
      cb(data);
    }
  
    return(
      <div className='inputSection'>
        <Input label='Name' value={data.name} onChange={e => setData({...data, name: e.target.value})}></Input>
        <Input label='Email' value={data.email} onChange={e => setData({...data, email: e.target.value})}></Input>
        <Input label='Phone' value={data.phone} onChange={e => setData({...data, phone: e.target.value})}></Input>
        <Text placeholder='Introduce yourself' value={data.intro} onChange={e => setData({...data, intro: e.target.value})}></Text>
        <div className='sectionControls'>
          <button>Edit</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }