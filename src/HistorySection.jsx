import { useState } from 'react'
import { Input, Text, Duration } from './Inputs'
import './App.css'

export function EduSection({cb}){
    const [id, setId] = useState(0);
    const [data, setData] = useState({
        id: id,
        school: '',
        study: '',
        description: '',
        date: ''
      });
      function handleSubmit(){
        cb({ ...data, id: id });
        setId(id+1);
      }
    return(
      <div className='inputSection'>
        <Input label={'School:'} value={data.school} onChange={e => setData({...data, school: e.target.value})}></Input>
        <Input label={'Field of study:'} value={data.study} onChange={e => setData({...data, study: e.target.value})}></Input>
        <Text placeholder={'Description:'} value={data.description} onChange={e => setData({...data, description: e.target.value})}></Text>
        <Duration/>
        <div className='sectionControls'>
          {/* <button>Edit</button> */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }

  export function WorkSection({cb}){
    const [id, setId] = useState(0);
    const [data, setData] = useState({
        id: id,
        employer: '',
        job: '',
        description: '',
        date: ''
      });
      function handleSubmit(){
        cb({ ...data, id: id });
        setId(id+1);
      }
      return(
        <div className='inputSection'>
            <Input label={'Employer:'} value={data.employer} onChange={e => setData({...data, employer: e.target.value})}></Input>
            <Input label={'FIeld of work:'} value={data.job} onChange={e => setData({...data, job: e.target.value})}></Input>
            <Text placeholder={'Description:'} value={data.description} onChange={e => setData({...data, description: e.target.value})}></Text>
            <Duration/>
        <div className='sectionControls'>
          {/* <button>Edit</button> */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
      )
    
  }