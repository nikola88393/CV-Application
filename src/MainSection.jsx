import { useState } from 'react'
import { Input, Text } from './Inputs'
import './App.css'
export function MainSection({cb}){
    const [error, setError] = useState('All fields are required.');
    const [data, setData] = useState({
      name: '',
      email: '',
      phone: '',
      intro: ''
    })
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      cb(data);
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      if (!value.trim()) {
        setError('All fields are required.');
      } else {
        setError('');
      }
    };
  
    return(
      <div className='inputSection'>
        <form action="#" onSubmit={handleSubmit}>
          <Input name='name' label='Name' value={data.name} onChange={handleInputChange}></Input>
          <Input name='email' label='Email' value={data.email} onChange={handleInputChange}></Input>
          <Input name='phone' label='Phone' value={data.phone} onChange={handleInputChange}></Input>
          <Text name='intro' placeholder='Introduce yourself' value={data.intro} onChange={handleInputChange}></Text>
          <button type='submit' disabled = {!!error}>Submit</button>
          <span>{error ? error : ''}</span>
        </form>
      </div>
    )
  }