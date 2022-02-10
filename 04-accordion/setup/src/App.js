import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import { RiRefreshLine } from "react-icons/ri";
function App() {
  const [questions, setQuestions] = useState(data);

  const removeQuestion = (id) => {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  };

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <div>
          {questions.map((question) => (
            <SingleQuestion
              key={question.id}
              {...question}
              removeQuestion={removeQuestion}
            />
          ))}
        </div>
        {!questions.length && (
          <div>
            <h3>No Questions Left</h3>
            <button className="btn" onClick={() => setQuestions(data)}>
              <RiRefreshLine />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
