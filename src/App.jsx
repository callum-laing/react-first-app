import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>Welcome to my playground!</header>
      <main>
        <Counter count={count} setCount={setCount} />
      </main>
      <footer>Made by Callum Laing</footer>
    </div>
  );
}

export default App;
