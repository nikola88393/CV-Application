import { useState } from 'react';
import { Input, Text, Duration } from './Inputs';
import './App.css';

export function EduSection({ cb, eduData, eduDelCb }) {
  const [id, setId] = useState(0);
  const [data, setData] = useState({
    id: id,
    school: '',
    study: '',
    description: '',
    startDate: '',
    endDate: '',
    isPresent: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  const education = eduData.map((edu) => (
    <div key={edu.id} className="eduEntry">
      <h1>
        School: {edu.school} ID: {edu.id}
      </h1>
      <button
        onClick={() => {
          eduDelCb(edu.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setData(edu);
          setIsEditing(true);
        }}
      >
        Edit
      </button>
    </div>
  ));

  const handleSubmit = () => {
    if (isEditing) {
      cb(data);
    } else {
      cb({ ...data, id: id });
      setId(id + 1);
    }
    resetForm();
  };

  const resetForm = () => {
    setData({
      id: id,
      school: '',
      study: '',
      description: '',
      startDate: '',
      endDate: '',
      isPresent: false,
    });
    setIsEditing(false);
  };

  const handleStartDateChange = (startDate) => {
    setData((prevData) => ({ ...prevData, startDate }));
  };

  const handleEndDateChange = (endDate) => {
    setData((prevData) => ({ ...prevData, endDate }));
  };

  const handlePresentChange = () => {
    setData((prevData) => ({
      ...prevData,
      isPresent: !prevData.isPresent,
      endDate: !prevData.isPresent ? 'Present' : '',
    }));
  };

  return (
    <div className="inputSection">
      {isEditing && <div>Editing entry: School - <strong>{data.school}
      </strong> ID - <strong>{data.id}</strong></div> }
      <Input
        label={'School:'}
        value={data.school}
        onChange={(e) => setData({ ...data, school: e.target.value })}
      />
      <Input
        label={'Field of study:'}
        value={data.study}
        onChange={(e) => setData({ ...data, study: e.target.value })}
      />
      <Text
        placeholder={'Description:'}
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <Duration
        startDate={data.startDate}
        endDate={data.endDate}
        isPresent={data.isPresent}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onPresentChange={handlePresentChange}
      />
      <div className="sectionControls">
        <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
      </div>
      <div className="eduEntries">{education}</div>
    </div>
  );
}

export function WorkSection({ cb, workData, workDelCb }) {
  const [id, setId] = useState(0);
  const [data, setData] = useState({
    id: id,
    employer: '',
    job: '',
    description: '',
    startDate: '',
    endDate: '',
    isPresent: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  const work = workData.map(job => 
    <div key={job.id} className="eduEntry">
        <h1>Employer: {job.employer} ID: {job.id}</h1>
        <button onClick={() => {workDelCb(job.id)}}>Delete</button>
        <button onClick={() => {
          setData(job);
          setIsEditing(true);
          }}>Edit</button>
    </div>
)

  const handleSubmit = () => {
    if (isEditing) {
      cb(data);
    } else {
      cb({ ...data, id: id });
      setId(id + 1);
    }
    resetForm();
  };

  const resetForm = () => {
    setData({
      id: id,
      employer: '',
      job: '',
      description: '',
      startDate: '',
      endDate: '',
      isPresent: false,
    });
    setIsEditing(false);
  };

  const handleStartDateChange = (startDate) => {
    setData((prevData) => ({ ...prevData, startDate }));
  };

  const handleEndDateChange = (endDate) => {
    setData((prevData) => ({ ...prevData, endDate }));
  };

  const handlePresentChange = () => {
    setData((prevData) => ({
      ...prevData,
      isPresent: !prevData.isPresent,
      endDate: !prevData.isPresent ? 'Present' : '',
    }));
  };

  return (
    <div className="inputSection">
      {isEditing && <div>Editing entry: Employer - <strong>{data.employer}
        </strong> ID - <strong>{data.id}</strong></div> }
      <Input
        label={'Employer:'}
        value={data.employer}
        onChange={(e) => setData({ ...data, employer: e.target.value })}
      />
      <Input
        label={'Field of work:'}
        value={data.job}
        onChange={(e) => setData({ ...data, job: e.target.value })}
      />
      <Text
        placeholder={'Description:'}
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <Duration
        startDate={data.startDate}
        endDate={data.endDate}
        isPresent={data.isPresent}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onPresentChange={handlePresentChange}
      />
      <div className="sectionControls">
        <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
      </div>
      <div className="workEntries">
            {work}
        </div>
    </div>
  );
}
