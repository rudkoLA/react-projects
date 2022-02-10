import React from "react";
import Slide from "./Slide";

const Slides = ({ people, index }) => {
  return (
    <>
      {people.map((person, personIndex) => {
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if ((personIndex + 1) % people.length === index) {
          position = "lastSlide";
        }
        return <Slide person={person} position={position} />;
      })}
    </>
  );
};

export default Slides;
