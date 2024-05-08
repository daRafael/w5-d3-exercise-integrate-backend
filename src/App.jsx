import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import studentsData from "./studentsData";
import "./App.css";
import Navbar from "./components/Navbar";

import { getAllStudents, createStudent, deleteStudent, updateStudent } from "../lib";

// Pages
import Homepage from "./Homepage";
import Listing from "./Listing";
import SingleStudent from "./SingleStudent";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import Error from "./Error";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents().then((data) => {
      setStudents(data);
    });
  }, []);

  const addStudent = (student) => {
    createStudent(student).then((studentData) => {
      setStudents([...students, studentData]);
    });
  };

  const editStudent = (student) => {
    updateStudent(student).then((studentData) => {
      setStudents(
        students.map((student) =>
          student._id === studentData._id ? studentData : student
        )
      );
    });
  };

  const deleteItem = (id) => {
    deleteStudent(id).then((data) => {
      setStudents(students.filter((student) => student._id !== data._id));
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage students={students} />} />
        <Route
          path="/students"
          element={<Listing students={students} deleteItem={deleteItem} />}
        />
        <Route
          path="/students/new"
          element={<AddStudent addStudent={addStudent} />}
        />
        <Route
          path="/students/:studentId"
          element={<SingleStudent students={students} />}
        />
        <Route
          path="/students/:studentId/edit"
          element={
            <UpdateStudent students={students} editStudent={editStudent} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
