import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

const defaultImg =
  "https://i.pinimg.com/736x/00/70/16/00701602b0eac0390b3107b9e2a665e0.jpg";

export default function AddStudent({ createStudent }) {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [age, setAge] = useState(0);
  const [bootcamp, setBootcamp] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgChange = (e) => {
    setImgURL(e.target.value);
  };

  const handleAgeChange = (e) => {
    const value = Number(e.target.value) || "";
    if (value < 0) return;
    setAge(value);
  };

  const handleBootcampChange = (e) => {
    setBootcamp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !age || !bootcamp) {
      alert("Please fill in all fields");
      return;
    }

    // generate id, if no image default image is used & add student to the list
    const id = uuidv4();
    const img = imgURL || defaultImg;
    createStudent({ id, name, img, age, bootcamp });

    // clear form
    setName("");
    setAge(0);
    setBootcamp("");

    // redirect to students list
    navigate("/students");
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form>
        <div className="input-wrapper">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Image URL:</label>
          <input
            type="text"
            name="imgURL"
            value={imgURL}
            onChange={handleImgChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Bootcamp:</label>
          <div className="select-wrapper">
            <select
              name="bootcamp"
              value={bootcamp}
              onChange={handleBootcampChange}
            >
              <option value="">Select a bootcamp</option>
              <option value="Web Development">Web Development</option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}
