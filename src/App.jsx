import { useState } from 'react'
import { MainSection } from './MainSection'
import { CVPreview } from './Preview'
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

  function handleSchoolsUpdate(school) {
    const index = schools.findIndex(s => s.id === school.id);

    if (index !== -1) {
      const updatedSchools = schools.map((s, i) => (i === index ? school : s));
      setSchools(updatedSchools);
    } else {
      setSchools([...schools, school]);
    }
  }

  function handleSchoolsDel(id){
    setSchools(schools.filter(school => school.id !== id));
  }

  function handleJobsUpdate(job){
    const index = jobs.findIndex(s => s.id === job.id);

    if (index !== -1) {
      const updatedJobs = jobs.map((j, i) => (i === index ? job : j));
      setJobs(updatedJobs);
    } else {
      setJobs([...jobs, job]);
    }
  }
  function handleJobsDel(id){
    setJobs(jobs.filter(school => school.id !== id));
  }

  return (
    <div className='app'>
      <MainSection cb={handleDataUpdate} />
      <EduSection cb={handleSchoolsUpdate} eduData={schools} eduDelCb={handleSchoolsDel}/>
      <WorkSection cb={handleJobsUpdate} workData={jobs} workDelCb={handleJobsDel}/>
      <CVPreview mainData={cvData} eduData={schools} workData={jobs} />
    </div>
  );
}