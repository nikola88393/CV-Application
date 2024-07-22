import { useState } from "react";
import { Input, Text, Image } from "./Inputs";

export function MainSection({ cb }) {
  const [error, setError] = useState("All fields are required.");
  const [data, setData] = useState({
    imageUrl: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    intro: "",
  });

  const handleFileSelect = (imageDataUrl) => {
    setData((prevData) => ({
      ...prevData,
      imageUrl: imageDataUrl,
    }));
  };

  const exampleData = {
    imageUrl: "src/assets/J0k1DN1T_400x400.jpg",
    name: "John Doe",
    email: "JohnDoe@example.com",
    address: "Suite 365 8410 Marlo Key, Caspermouth, NJ 58481-0218",
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

  const clearForm = () => {
    setData({
      imageUrl: "",
      name: "",
      email: "",
      address: "",
      phone: "",
      intro: "",
    });
    setError("All fields are required.");
  };

  return (
    <div className="inputSection">
      <h2 className="sectionHeader">Main section</h2>
      <form action="#" className="formSection" onSubmit={handleSubmit}>
        <Image onFileSelect={handleFileSelect} />
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
          name="address"
          label="Address"
          value={data.address}
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
          <button type="button" className="btn danger" onClick={clearForm}>
            Clear Form
          </button>
        </div>
        <span>{error ? error : ""}</span>
      </form>
    </div>
  );
}
