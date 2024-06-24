import { useState } from 'react';
import { Input, Text, Duration } from './Inputs';
import './App.css';

export function Section({ cb, data, delCb, labels, placeholders}) {
  const [id, setId] = useState(0);
  const [formFill, setFormFill] = useState(false);
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

  function checkFormFill() {
    const { primary, secondary, description, startDate, endDate, isPresent } = formData;
    if (primary && secondary && description && startDate && (isPresent || endDate)) {
      setFormFill(true);
    } else {
      setFormFill(false);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
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
    setFormFill(false);
  };

  const handleStartDateChange = (startDate) => {
    setFormData((prevData) => ({ ...prevData, startDate }));
    checkFormFill();
  };

  const handleEndDateChange = (endDate) => {
    setFormData((prevData) => ({ ...prevData, endDate }));
    checkFormFill();
  };

  const handlePresentChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isPresent: !prevData.isPresent,
      endDate: !prevData.isPresent ? 'Present' : '',
    }));
    checkFormFill();
  };

  return (
    <div className="inputSection">
      <form action="#">
      {isEditing && (
        <div>
          Editing entry: {labels.primary} - <strong>{formData.primary}</strong> ID - <strong>{formData.id}</strong>
        </div>
      )}
      <Input
        label={`${labels.primary}:`}
        value={formData.primary}
        onChange={(e) => {
          setFormData({ ...formData, primary: e.target.value });
          checkFormFill();
        }}
      />
      <Input
        label={`${labels.secondary}:`}
        value={formData.secondary}
        onChange={(e) => {
          setFormData({ ...formData, secondary: e.target.value });
          checkFormFill();
        }}
      />
      <Text
        placeholder={placeholders.description}
        value={formData.description}
        onChange={(e) => {
          setFormData({ ...formData, description: e.target.value });
          checkFormFill();
        }}
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
        <button onClick={handleSubmit} disabled = {!formFill}>{isEditing ? 'Update' : 'Submit'}</button>
        <span>{!formFill ? 'Please fill out every field' : ''}</span>
      </div>
      </form>
      <div className="entries">{entries}</div>
    </div>
  );
}

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