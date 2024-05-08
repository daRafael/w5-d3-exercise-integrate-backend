import "./SingleStudent.css";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getStudentById } from "../lib";

export default function SingleStudent({ students }) {
  const { studentId } = useParams();
  const [foundStudent, setFoundStudent] = useState([]);

  useEffect(() => {
    let student = students.find((student) => student._id === studentId);

    if (student) setFoundStudent(student);
    else
      getStudentById(studentId).then((student) => {
        if (!student) return <Navigate to="/students" />;
        setFoundStudent(student);
      });
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile card">
        <img
          src={foundStudent.img}
          alt={`${foundStudent.name} profile picture`}
          width={300}
          height="auto"
          style={{ borderRadius: "50%" }}
        />
        <h2>{foundStudent.name}</h2>
        <p>{foundStudent.age} anos</p>
        <p>{foundStudent.bootcamp}</p>
      </div>
    </div>
  );
}

