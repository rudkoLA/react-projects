import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      {categories.map((item) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
