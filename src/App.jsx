import { useState } from 'react'
import { MainSection } from './MainSection'
import { CVPreview } from './Preview'
import './App.css'
import { EduSection, WorkSection } from './HistorySection';

export function AppContainer(){
  const [cvData, setCvData] = useState({
    name: '',
    email: '',
    phone: '',
    intro: ''
  });
  const [schools, setSchools] = useState([]);
  const [jobs, setJobs] = useState([]);

  function handleDataUpdate(data) {
    setCvData(data);
  }

  function handleSchoolsUpdate(school){
    setSchools([...schools, school]);
  }

  function handleJobsUpdate(job){
    setJobs([...jobs, job]);
  }

  return (
    <div className='app'>
      <MainSection cb={handleDataUpdate} />
      <EduSection cb={handleSchoolsUpdate}/>
      <WorkSection cb={handleJobsUpdate}/>
      <CVPreview mainData={cvData} eduData={schools} workData={jobs} />
    </div>
  );
}