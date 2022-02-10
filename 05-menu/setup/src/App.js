import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    debugger;
    const newItems =
      category === "all"
        ? items
        : items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const getCategories = () => {
    const newCategories = items.map((item) => item.category);
    console.log(newCategories);
    let uniqueCategories = [];
    newCategories.forEach((item) => {
      if (!uniqueCategories.includes(item)) {
        uniqueCategories.push(item);
      }
    });
    setCategories(uniqueCategories);
  };

  useEffect(getCategories, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
