export function CVPreview({ mainData, eduData, workData }) {
    return(
        <div className="cvPreview">
            <MainPreview mainData = {mainData}/>
            <EduPreview eduData = {eduData}/>
            <WorkPreview workData = {workData}/>
        </div>
    )
  }

  function MainPreview({mainData}){
    return (
        <div className='mainPreview'>
          <h2>CV Preview</h2>
          <p><strong>Name:</strong> {mainData.name}</p>
          <p><strong>Email:</strong> {mainData.email}</p>
          <p><strong>Phone:</strong> {mainData.phone}</p>
          <p><strong>Introduction:</strong> {mainData.intro}</p>
        </div>
      );
  }
  function EduPreview({eduData}){
    const education = eduData.map(edu => 
        <div key={edu.id} className="eduEntry">
            <h1>Id: {edu.id}</h1>
            <h2><strong>School: </strong>{edu.school}</h2>
            <h3><strong>Field of study: </strong>{edu.study}</h3>
            <p><strong>Description: </strong>{edu.description}</p>
            <p><strong>Date: </strong>{edu.date}</p>
        </div>
    );
    return (
        <div className='eduPreview'>
         {education}
        </div>
      );
  }

  function WorkPreview({workData}){
    const jobs = workData.map(work => 
        <div key={work.id} className="workEntry">
            <h1>Id: {work.id}</h1>
            <h2><strong>Employer: </strong>{work.employer}</h2>
            <h3><strong>Field of work: </strong>{work.job}</h3>
            <p><strong>Description: </strong>{work.description}</p>
            <p><strong>Date: </strong>{work.date}</p>
        </div>
    );
    return (
        <div className='workPreview'>
         {jobs}
        </div>
      );
  }