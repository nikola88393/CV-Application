import { useState } from "react";
import { Input, Text, Duration } from "./Inputs";

export function Section({ cb, data, delCb, labels, placeholders }) {
  const [id, setId] = useState(0);
  const [error, setError] = useState("All fields are required.");
  const [formData, setFormData] = useState({
    id: id,
    primary: "",
    secondary: "",
    description: "",
    startDate: "",
    endDate: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (isEditing) {
        cb(formData);
      } else {
        cb({ ...formData, id: id });
        setId(id + 1);
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      id: id + 1,
      primary: "",
      secondary: "",
      description: "",
      startDate: "",
      endDate: "",
      isPresent: false,
    });
    setIsEditing(false);
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      endDate: !prevData.isPresent ? "Present" : "",
    }));
  };

  return (
    <div className="inputSection">
      <form action="#" onSubmit={handleSubmit} className="formSection">
        {isEditing && (
          <div>
            Editing entry: {labels.primary} -{" "}
            <strong>{formData.primary}</strong> ID -{" "}
            <strong>{formData.id}</strong>
          </div>
        )}
        <Input
          name="primary"
          label={`${labels.primary}:`}
          value={formData.primary}
          onChange={handleInputChange}
        />
        <Input
          name="secondary"
          label={`${labels.secondary}:`}
          value={formData.secondary}
          onChange={handleInputChange}
        />
        <Text
          name="description"
          placeholder={placeholders.description}
          value={formData.description}
          onChange={handleInputChange}
        />
        <Duration
          name="duration"
          startDate={formData.startDate}
          endDate={formData.endDate}
          isPresent={formData.isPresent}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onPresentChange={handlePresentChange}
          setDurationError={setError}
        />
        <button type="submit" disabled={!!error}>
          {isEditing ? "Update" : "Submit"}
        </button>
        <span>{error}</span>
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
      labels={{ primary: "School", secondary: "Field of study" }}
      placeholders={{ description: "Description" }}
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
      labels={{ primary: "Employer", secondary: "Job Title" }}
      placeholders={{ description: "Job Description" }}
      entity="work"
    />
  );
}
