import { useState } from 'react'
import { MainSection } from './MainSection'
import { CVPreview, WorkEntries } from './Preview'
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
  const [editData, setEditData] = useState(null);

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

    setEditData(null);
  }

  function handleSchoolsDel(id){
    setSchools(schools.filter(school => school.id !== id));
  }
  function handleSchoolEdit(id){
    const school = schools.filter(school => school.id === id);
    console.log(school);
    setEditData(school);
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
      <EduSection cb={handleSchoolsUpdate} editData={editData} eduData={schools} eduDelCb={handleSchoolsDel} eduEditCb={handleSchoolEdit}/>
      <WorkSection cb={handleJobsUpdate}/>
      {/* <EduEntries eduData={schools} eduDelCb={handleSchoolsDel} eduEditCb={handleSchoolEdit}/> */}
      <WorkEntries workData={jobs} workDelCb={handleJobsDel}/>
      <CVPreview mainData={cvData} eduData={schools} workData={jobs} />
    </div>
  );
}