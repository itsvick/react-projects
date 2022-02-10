import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import MenuList from "./MenuList";
import React, { useState } from "react";

function App() {
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  console.log("categories", categories);

  const [activeCategory, setActiveCategory] = React.useState("all");
  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
        <nav>
          <ul>
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    className={
                      activeCategory === item
                        ? "active text-capitalize"
                        : "text-capitalize"
                    }
                    onClick={() => setActiveCategory(item)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <MenuList activeCategory={activeCategory} menus={data} />
    </main>
  );
}

export default App;
