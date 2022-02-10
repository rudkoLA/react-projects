import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const DEFAULT_SCALE = 10;

function App() {
  const [color, setColor] = useState("#f15025");
  const [scale, setScale] = useState(DEFAULT_SCALE);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(scale));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(scale);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };
  return (
    <>
      <section className="countainer">
        <h3>color</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            />
          <input
            type="number"
            min={1}
            value={scale}
            onChange={(e) => setScale(+e.target.value)}
            placeholder={scale}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} hex={color.hex} scale={scale}/>
          );
        })}
      </section>
    </>
  );
}

export default App;
