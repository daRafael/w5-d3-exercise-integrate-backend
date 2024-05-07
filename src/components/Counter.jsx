import "./Counter.css";

export default function Counter({ count = 0 }) {
  return (
    <div className="counter">
      <span>{count}</span>
      <h3>Ironhackers</h3>
    </div>
  );
}
