import React from "react";
import { useState } from "react";

const Question = ({
  questionIndex,
  questionWord,
  lang,
  handleNext,
  totalQuestions,
  getSelectedAnswer,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="text-xl text-blue-950 p-5">
      <h4 className="font-bold m-5">
        {questionIndex + 1}/{totalQuestions}
        <span className="progress-bar bg-white rounded-2xl my-5">
          <span
            style={{
              width: `${Math.ceil((questionIndex / totalQuestions) * 100)}%`,
              backgroundColor: "rgb(220, 72, 106)",
            }}
            className="rounded-2xl"></span>
        </span>
      </h4>
      <div className="container m-5 p-5">
        <p className="font-medium my-5">
          {`What is the meaning of this ${lang.native} word "${questionWord}" in 
          ${lang.foreign}`}{" "}
          ?
        </p>
        <input
          type="text"
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getSelectedAnswer(questionIndex, inputValue);
              handleNext(questionIndex);
              setInputValue("");
            }
          }}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-white rounded-2xl shadow-2xl px-5 text-center"
        />
      </div>
    </div>
  );
};

export default Question;
