import { useState } from "react";
import { Input, Text } from "./Inputs";

export function MainSection({ cb }) {
  const [error, setError] = useState("All fields are required.");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    intro: "",
  });

  const exampleData = {
    name: "John Doe",
    email: "JohnDoe@example.com",
    phone: "+359 11 2222 333",
    intro:
      "Highly skilled and motivated software engineer with over 8 years of experience in developing and maintaining software applications. Proficient in a variety of programming languages and technologies, with a strong background in full-stack development, system design, and agile methodologies. Passionate about solving complex problems and delivering high-quality software solutions.",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cb(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (!value.trim()) {
      setError("All fields are required.");
    } else {
      setError("");
    }
  };

  const loadExample = () => {
    setData(exampleData);
  };
  return (
    <div className="inputSection">
      <h2 className="sectionHeader">Main section</h2>
      <form action="#" className="formSection" onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Name"
          value={data.name}
          onChange={handleInputChange}
        ></Input>
        <Input
          name="email"
          label="Email"
          value={data.email}
          onChange={handleInputChange}
        ></Input>
        <Input
          name="phone"
          label="Phone"
          value={data.phone}
          onChange={handleInputChange}
        ></Input>
        <Text
          name="intro"
          placeholder="Introduce yourself"
          value={data.intro}
          onChange={handleInputChange}
        ></Text>
        <div className="sectionOptions">
          <button className="btn" type="submit" disabled={!!error}>
            Submit
          </button>
          <button className="btn" onClick={loadExample}>
            Load Example
          </button>
        </div>
        <span>{error ? error : ""}</span>
      </form>
    </div>
  );
}
