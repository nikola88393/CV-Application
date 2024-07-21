import { useState } from "react";
import { Input, Text, Duration } from "./Inputs";

export function Section({
  cb,
  data,
  delCb,
  labels,
  placeholders,
  exampleData,
}) {
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
      <h3>
        {labels.primary}: {item.primary} ID: {item.id}
      </h3>
      <div className="entryOptions">
        <button
          className="btn danger"
          onClick={() => {
            delCb(item.id);
          }}
        >
          Delete
        </button>
        <button
          className="btn"
          onClick={() => {
            setFormData(item);
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </div>
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
    }));
  };

  const loadExample = () => {
    setFormData(exampleData);
    cb({ ...exampleData, id: id });
    setId(id + 1);
    resetForm();
  };

  return (
    <div className="inputSection">
      <h2 className="sectionHeader">{labels.title}</h2>
      <form
        action="#"
        onSubmit={handleSubmit}
        className="formSection"
        id="sectionForm"
      >
        {isEditing && (
          <div>
            Editing entry: {labels.primary} -{" "}
            <strong>{formData.primary}</strong>
            {"; ID: "} <strong>{formData.id}</strong>
          </div>
        )}
        <Input
          name="primary"
          label={`${labels.primary}`}
          value={formData.primary}
          onChange={handleInputChange}
        />
        <Input
          name="secondary"
          label={`${labels.secondary}`}
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
        <div className="sectionOptions">
          <button className="btn" type="submit" disabled={!!error}>
            {isEditing ? "Update" : "Submit"}
          </button>
          <button className="btn" type="button" onClick={loadExample}>
            Load Example
          </button>
        </div>
        <span>{error}</span>
      </form>
      <div className="entries">{entries}</div>
    </div>
  );
}

export function EduSection({ cb, eduData, eduDelCb }) {
  const exampleData = {
    primary: "University of Anytown, USA",
    secondary: "Bachelor of Science in Computer Science",
    description:
      "Assisted in the development of front-end and back-end components for web applications. Wrote unit and integration tests to ensure software quality and reliability. Collaborated with senior developers to learn and apply best practices in coding and design. Participated in code reviews and contributed to the improvement of the development process. Gained experience with cloud services and containerization technologies.",
    startDate: "2017-09-15",
    endDate: "2021-05-30",
    isPresent: false,
  };
  return (
    <Section
      cb={cb}
      data={eduData}
      delCb={eduDelCb}
      labels={{
        primary: "Field of study",
        secondary: "School",
        title: "Education section",
      }}
      exampleData={exampleData}
      placeholders={{ description: "Description" }}
      entity="education"
    />
  );
}

export function WorkSection({ cb, workData, workDelCb }) {
  const exampleData = {
    primary: "Tech Solutions Inc., Anytown, USA",
    secondary: "Senior Software Engineer",
    description:
      "Lead the development of scalable web applications using Java, Spring Boot, and React. Design and implement RESTful APIs to support front-end applications. Collaborate with cross-functional teams to gather requirements and deliver software solutions that meet business needs. Mentor junior developers and conduct code reviews to ensure adherence to best practices. Implement CI/CD pipelines using Jenkins and Docker to streamline the deployment process. Perform system analysis and optimize application performance.",
    startDate: "2022-07-12",
    endDate: "",
    isPresent: true,
  };

  return (
    <Section
      cb={cb}
      data={workData}
      delCb={workDelCb}
      labels={{
        primary: "Job Title",
        secondary: "Employer",
        title: "Work section",
      }}
      exampleData={exampleData}
      placeholders={{ description: "Job Description" }}
      entity="work"
    />
  );
}
