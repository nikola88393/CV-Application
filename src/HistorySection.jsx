import { useState } from 'react';
import { Input, Text, Duration } from './Inputs';
import './App.css';

export function Section({ cb, data, delCb, labels, placeholders}) {
  const [id, setId] = useState(0);
  const [formData, setFormData] = useState({
    id: id,
    primary: '',
    secondary: '',
    description: '',
    startDate: '',
    endDate: '',
    isPresent: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  const entries = data.map((item) => (
    <div key={item.id} className="entry">
      <h1>
        {labels.primary}: {item.primary} ID: {item.id}
      </h1>
      <button
        onClick={() => {
          delCb(item.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setFormData(item);
          setIsEditing(true);
        }}
      >
        Edit
      </button>
    </div>
  ));

  const handleSubmit = () => {
    if (isEditing) {
      cb(formData);
    } else {
      cb({ ...formData, id: id });
      setId(id + 1);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: id,
      primary: '',
      secondary: '',
      description: '',
      startDate: '',
      endDate: '',
      isPresent: false,
    });
    setIsEditing(false);
  };

  const handleStartDateChange = (startDate) => {
    setFormData((prevData) => ({ ...prevData, startDate }));
  };

  const handleEndDateChange = (endDate) => {
    setFormData((prevData) => ({ ...prevData, endDate }));
  };

  const handlePresentChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isPresent: !prevData.isPresent,
      endDate: !prevData.isPresent ? 'Present' : '',
    }));
  };

  return (
    <div className="inputSection">
      {isEditing && (
        <div>
          Editing entry: {labels.primary} - <strong>{formData.primary}</strong> ID - <strong>{formData.id}</strong>
        </div>
      )}
      <Input
        label={`${labels.primary}:`}
        value={formData.primary}
        onChange={(e) => setFormData({ ...formData, primary: e.target.value })}
      />
      <Input
        label={`${labels.secondary}:`}
        value={formData.secondary}
        onChange={(e) => setFormData({ ...formData, secondary: e.target.value })}
      />
      <Text
        placeholder={placeholders.description}
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <Duration
        startDate={formData.startDate}
        endDate={formData.endDate}
        isPresent={formData.isPresent}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onPresentChange={handlePresentChange}
      />
      <div className="sectionControls">
        <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
      </div>
      <div className="entries">{entries}</div>
    </div>
  );
}

// Example usage for EduSection
export function EduSection({ cb, eduData, eduDelCb }) {
  return (
    <Section
      cb={cb}
      data={eduData}
      delCb={eduDelCb}
      labels={{ primary: 'School', secondary: 'Field of study' }}
      placeholders={{ description: 'Description' }}
      entity="education"
    />
  );
}

// Example usage for WorkSection
export function WorkSection({ cb, workData, workDelCb }) {
  return (
    <Section
      cb={cb}
      data={workData}
      delCb={workDelCb}
      labels={{ primary: 'Employer', secondary: 'Job Title' }}
      placeholders={{ description: 'Job Description' }}
      entity="work"
    />
  );
}