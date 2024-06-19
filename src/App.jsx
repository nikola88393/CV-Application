import { useState } from 'react'
import { MainSection } from './MainSection'
import { CVPreview } from './Preview'
import './App.css'
import { HistorySection } from './HistorySection';

export function AppContainer(){
  const [cvData, setCvData] = useState({
    name: '',
    email: '',
    phone: '',
    intro: ''
  });
  const [schools, setSchools] = useState(['']);
  const [jobs, setJobs] = useState(['']);

  function handleDataUpdate(data) {
    setCvData(data);
  }


  return (
    <div className='app'>
      <MainSection cb={handleDataUpdate} />
      <CVPreview data={cvData} />
    </div>
  );
}