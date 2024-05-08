import { useState } from "react";
import "./StudentsList.css";
import StudentCard from "./StudentCard";

export default function StudentsList({ students, deleteItem }) {
  const [category, setCategory] = useState("");

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="wrapper">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h5>Filter by Bootcamp:</h5>
        <div className="category-select-wrapper">
          <select name={category} onChange={handleCategoryFilter}>
            <option value="">All</option>
            <option value="Web Development">Web Development</option>
            <option value="UX/UI Design">UX/UI Design</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>
        </div>
      </div>
      <ul>
        {students.map((student) => {
          if (category === "" || student.bootcamp === category) {
            return (
              <StudentCard
                key={student._id}
                student={student}
                deleteItem={deleteItem}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
