import { useParams, Navigate, useSearchParams } from "react-router-dom";
import "./SingleStudent.css";

export default function SingleStudent({ students }) {
  const { studentId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // find student using .find()
  const student = students.find((student) => student.id === studentId);

  // find student using .filter()
  // const student = students.filter((student) => student.id === studentId)[0];

  if (!student) {
    return <Navigate to="/students" />;
  }

  const showAge = searchParams.get("showAge");
  const showBootcamp = searchParams.get("showBootcamp");

  // console.log("showAge", showAge);
  // console.log("showBootcamp", showBootcamp);

  return (
    <div className="profile-wrapper">
      <div className="profile card">
        <img
          src={student.img}
          alt={`${student.name} profile picture`}
          width={300}
          height="auto"
          style={{ borderRadius: "50%" }}
        />
        <h2>{student.name}</h2>
        <p>{student.age} anos</p>
        <p>{student.bootcamp}</p>
      </div>
    </div>
  );
}
