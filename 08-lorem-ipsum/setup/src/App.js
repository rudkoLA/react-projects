import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (count < 1) {
      setText([data[0]]);
    } else {
      let textToBeSet = [];
      for (let i = 0; i < count; i++) {
        textToBeSet.push(data[i]);
      }
      setText(textToBeSet);
    }
  };

  return (
    <section className="section-center">
      <h3>tired of boring lrem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn" onClick>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
