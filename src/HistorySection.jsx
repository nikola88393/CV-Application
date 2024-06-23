import { useState } from 'react'
import { Input, Text, Duration } from './Inputs'
import './App.css'

export function EduSection({ cb, editData, eduData, eduDelCb, eduEditCb}) {
    const [id, setId] = useState(0);
    const [data, setData] = useState({
      id: id,
      school: '',
      study: '',
      description: '',
      startDate: '',
      endDate: '',
      isPresent: false
    });
    
    const education = eduData.map(edu => 
      <div key={edu.id} className="eduEntry">
          <h1>School: {edu.school} ID: {edu.id}</h1>
          <button onClick={() => {eduDelCb(edu.id)}}>Delete</button>
          <button onClick={() => {eduEditCb(edu.id)}}>Edit</button>
      </div>
  )

    const handleSubmit = () => {
        if(editData !== null){
            cb({ data });
            setData({...data, 
                school: '',
                study: '',
                description: '',
                startDate: '',
                endDate: '',
                isPresent: false
            })
        }
        else{
            cb({ ...data, id: id });
            setId(id + 1);
            setData({...data, 
                school: '',
                study: '',
                description: '',
                startDate: '',
                endDate: '',
                isPresent: false
              })
        }
      
    };

    const handleStartDateChange = (startDate) => {
      setData(prevData => ({ ...prevData, startDate }));
    };
  
    const handleEndDateChange = (endDate) => {
      setData(prevData => ({ ...prevData, endDate }));
    };
  
    const handlePresentChange = () => {
      setData(prevData => ({
        ...prevData,
        isPresent: !prevData.isPresent,
        endDate: !prevData.isPresent ? 'Present' : prevData.endDate
      }));
    };
  
    return (
      <div className='inputSection'>
        <Input
          label={'School:'}
          value={editData !== null ? editData.school : data.school}
          onChange={e => setData({ ...data, school: e.target.value })}
        />
        <Input
          label={'Field of study:'}
          value={editData !== null ? editData.study : data.study}
          onChange={e => setData({ ...data, study: e.target.value })}
        />
        <Text
          placeholder={'Description:'}
          value={editData !== null ? editData.description: data.description}
          onChange={e => setData({ ...data, description: e.target.value })}
        />
        <Duration
          startDate={editData !== null ? editData.startDate : data.startDate}
          endDate={editData !== null ? editData.endDate : data.endDate}
          isPresent={editData !== null ? editData.isPresent : data.isPresent}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onPresentChange={handlePresentChange}
        />
        <div className='sectionControls'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="eduEntries">
            {education}
        </div>
      </div>
    );
  }

  export function WorkSection({ cb }) {
    const [id, setId] = useState(0);
    const [data, setData] = useState({
      id: id,
      employer: '',
      job: '',
      description: '',
      startDate: '',
      endDate: '',
      isPresent: false
    });
  
    const handleSubmit = () => {
      cb({ ...data, id: id });
      setId(id + 1);
      setData({...data, 
        school: '',
        study: '',
        description: '',
        startDate: '',
        endDate: '',
        isPresent: false
        })
    };
  
    const handleStartDateChange = (startDate) => {
      setData(prevData => ({ ...prevData, startDate }));
    };
  
    const handleEndDateChange = (endDate) => {
      setData(prevData => ({ ...prevData, endDate }));
    };
  
    const handlePresentChange = () => {
      setData(prevData => ({
        ...prevData,
        isPresent: !prevData.isPresent,
        endDate: !prevData.isPresent ? 'Present' : prevData.endDate
      }));
    };
  
    return (
      <div className='inputSection'>
        <Input
          label={'Employer:'}
          value={data.employer}
          onChange={e => setData({ ...data, employer: e.target.value })}
        />
        <Input
          label={'Field of work:'}
          value={data.job}
          onChange={e => setData({ ...data, job: e.target.value })}
        />
        <Text
          placeholder={'Description:'}
          value={data.description}
          onChange={e => setData({ ...data, description: e.target.value })}
        />
        <Duration
          startDate={data.startDate}
          endDate={data.endDate}
          isPresent={data.isPresent}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onPresentChange={handlePresentChange}
        />
        <div className='sectionControls'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }