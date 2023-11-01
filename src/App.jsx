import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter.jsx";
import Heading from "./components/header/Heading.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <main>
        <Counter count={count} setCount={setCount} />
        <div id="two" class="card"></div>
        <div id="three" class="card"></div>
        <div id="four" class="card"></div>
      </main>
    </>
  );
}

export default App;
