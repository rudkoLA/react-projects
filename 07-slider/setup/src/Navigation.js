import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Navigation = ({ handlePrevClick, handleNextClick }) => {
  return (
    <>
      <button className="prev" onClick={handlePrevClick}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={handleNextClick}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Navigation;
