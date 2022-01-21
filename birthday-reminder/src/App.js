import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import data from "./data.js";
import { useState } from "react";

function App() {
  console.log("data", data);

  const [list, setList] = useState(data);
  return (
    <main>
      <section className="container">
        <h3 className="title">{list.length} Birthdays today</h3>
        <List people={list} />

        <button onClick={() => setList([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
