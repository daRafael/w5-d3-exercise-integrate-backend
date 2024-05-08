import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getStudentById } from "../lib";

export default function UpdateStudent({ students, editStudent }) {
  const { studentId } = useParams();
  const [foundStudent, setFoundStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let student = students.find((student) => student._id === studentId);

    if (student) setFoundStudent(student);
    else
      getStudentById(studentId).then((student) => {
        if (!student) return <Navigate to="/students" />;
        setFoundStudent(student);
      });
  }, []);

  const handleNameChange = (e) => {
    setFoundStudent({ ...foundStudent, name: e.target.value });
  };

  const handleImgChange = (e) => {
    setFoundStudent({ ...foundStudent, imgURL: e.target.value });
  };

  const handleAgeChange = (e) => {
    const value = Number(e.target.value) || "";
    if (value < 0) return;
    setFoundStudent({ ...foundStudent, age: value });
  };

  const handleBootcampChange = (e) => {
    setFoundStudent({ ...foundStudent, bootcamp: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!foundStudent.name || !foundStudent.age || !foundStudent.bootcamp) {
      alert("Please fill in all fields");
      return;
    }

    // update student in the list
    editStudent(foundStudent);

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
            value={foundStudent.name || ""}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Image URL:</label>
          <input
            type="text"
            name="imgURL"
            value={foundStudent.imgURL || ""}
            onChange={handleImgChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={foundStudent.age || 0}
            onChange={handleAgeChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Bootcamp:</label>
          <div className="select-wrapper">
            <select
              name="bootcamp"
              value={foundStudent.bootcamp || ""}
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
