import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function UpdateStudent({ students, setStudents }) {
  const { studentId } = useParams();

  // find student using .find()
  const student = students.find((student) => student.id === studentId);
  // if student is not found, redirect to students list
  if (!student) return <Navigate to="/students" />;

  const [name, setName] = useState(student.name);
  const [imgURL, setImgURL] = useState(student.img);
  const [age, setAge] = useState(student.age);
  const [bootcamp, setBootcamp] = useState(student.bootcamp);
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

    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return { id: studentId, name, img: imgURL, age, bootcamp };
      }
      return student;
    });

    // update student in the list
    setStudents(updatedStudents);

    // redirect to students list
    navigate("/students");
  };

  return (
    <div>
      <h1>Edit Student</h1>
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
