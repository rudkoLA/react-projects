import React, { useState, useEffect } from "react";
import data from "./data";
import Navigation from "./Navigation";
import Slides from "./Slides";
import Title from "./Title";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalRef = setInterval(() => {
      setIndex((index + 1) % people.length);
    }, 3000);
    return () => clearInterval(intervalRef);
  }, [index]);

  const handlePrevClick = () => {
    setIndex((index + people.length - 1) % people.length);
  };
  const handleNextClick = () => {
    setIndex((index + 1) % people.length);
  };

  return (
    <section className="section">
      <Title titleText="reviews" />
      <div className="section-center">
        <Slides people={people} index={index} />
        <Navigation
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </section>
  );
}

export default App;
