import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Heading from "./components/Heading.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <main>
        <Counter count={count} setCount={setCount} />
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </main>
    </>
  );
}

export default App;
