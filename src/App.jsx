import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Heading from "./components/Heading.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <Heading />
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
