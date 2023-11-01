import "./Counter.css";

export default function Counter({ count, setCount }) {
  return (
    <div id="one" className="card">
      <h2 className="counterTitle">COUNTER</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      {count === 0 ? (
        <span>
          <p className="counterText">
            Click the <strong>+</strong> to start
          </p>
        </span>
      ) : (
        <span>
          <p className="counterText">
            You clicked <strong>{count}</strong> time{count === 1 ? "" : "s"}
          </p>
        </span>
      )}
      {count !== 0 && (
        <button onClick={() => setCount((count) => count - 1)}>
          <strong>-</strong>
        </button>
      )}
    </div>
  );
}
