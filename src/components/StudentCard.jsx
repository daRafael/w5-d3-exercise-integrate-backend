import { Link } from "react-router-dom";

export default function StudentCard({ student, deleteItem }) {
  return (
    <li className="card">
      <Link to={`/students/${student._id}`}>{student.name}</Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="button" to={`/students/${student._id}/edit`}>
          ✏️
        </Link>
        <button onClick={() => deleteItem(student._id)}>🗑️</button>
      </div>
    </li>
  );
}
