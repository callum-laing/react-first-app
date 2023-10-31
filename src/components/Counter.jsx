export default function Counter({ count, setCount }) {
  return (
    <div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        {count === 0 ? (
          <span>Let's start!</span>
        ) : (
          <span>You clicked {count} times</span>
        )}
        {count !== 0 && (
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        )}
      </div>
    </div>
  );
}
