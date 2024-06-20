import { useState } from 'react'
import { MainSection } from './MainSection'
import { CVPreview, EduEntries, WorkEntries } from './Preview'
import './App.css'
import { EduSection, WorkSection,  } from './HistorySection';

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
  function handleSchoolsDel(id){
    setSchools(schools.filter(school => school.id !== id));
  }

  function handleJobsUpdate(job){
    setJobs([...jobs, job]);
  }
  function handleJobsDel(id){
    setJobs(jobs.filter(school => school.id !== id));
  }

  return (
    <div className='app'>
      <MainSection cb={handleDataUpdate} />
      <EduSection cb={handleSchoolsUpdate}/>
      <WorkSection cb={handleJobsUpdate}/>
      <EduEntries eduData={schools} eduDelCb={handleSchoolsDel}/>
      <WorkEntries workData={jobs} workDelCb={handleJobsDel}/>
      <CVPreview mainData={cvData} eduData={schools} workData={jobs} />
    </div>
  );
}