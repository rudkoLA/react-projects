import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex, type }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexColor = `#${hex}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${type === "shade" ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      <p className={`alert ${alert ? "visible" : null}`}>copied to clipboard</p>
    </article>
  );
};

export default SingleColor;
