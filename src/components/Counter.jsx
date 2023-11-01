import "./Counter.css";

export default function Counter({ count, setCount }) {
  return (
    <div className="section1">
      <div className="card">
        <h2>Counter</h2>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        {count === 0 ? (
          <span>
            <h2>Let's start!</h2>
          </span>
        ) : (
          <span>
            <h2>
              You clicked {count} time{count === 1 ? "" : "s"}
            </h2>
          </span>
        )}
        {count !== 0 && (
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        )}
      </div>
    </div>
  );
}
