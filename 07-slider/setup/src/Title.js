import React from "react";

const Title = ({ titleText }) => {
  return (
    <div className="title">
      <h2>
        <span>/</span> {titleText}
      </h2>
    </div>
  );
};

export default Title;
