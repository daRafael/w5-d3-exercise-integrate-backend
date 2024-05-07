import { Link } from "react-router-dom";

export default function StudentCard({ student, deleteItem }) {
  return (
    <li className="card">
      <Link to={`/students/${student.id}`}>{student.name}</Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="button" to={`/students/${student.id}/edit`}>
          ✏️
        </Link>
        <button onClick={() => deleteItem(student.id)}>🗑️</button>
      </div>
    </li>
  );
}
