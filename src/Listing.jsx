import StudentsList from "./components/StudentsList";

export default function Listing({ students, deleteItem }) {
  return (
    <div>
      <h1>Students List</h1>
      <StudentsList students={students} deleteItem={deleteItem} />
    </div>
  );
}
