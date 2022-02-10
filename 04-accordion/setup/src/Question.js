import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Question = ({ id, title, info, removeQuestion }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded && <AiOutlineMinus />}
          {!expanded && <AiOutlinePlus />}
        </button>
        <button className="btn" onClick={() => removeQuestion(id)}>
          <RiDeleteBin5Fill />
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </div>
  );
};

export default Question;
