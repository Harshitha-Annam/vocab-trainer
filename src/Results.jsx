import React from "react";

const Results = ({ answers }) => {
  const correctAnswers = answers.filter(
    (answer) => answer.selectedAnswer === answer.correctAnswer
  ).length;
  return (
    <>
      <div
        className="
    my-10 mx-5 p-5 bg-blue-950 text-white text-xl  rounded-2xl">
        {console.log(answers)}
        <table>
          <thead className="font-bold text-red-500">
            <tr>
              <td>Question No</td>
              <td>Question Word</td>
              <td>Correct Answer</td>
              <td>Your Answer</td>
              <td>Remark</td>
            </tr>
          </thead>
          <tbody>
            {answers.map((obj) => (
              <tr key={obj.questionIndex}>
                <td>{obj.questionIndex + 1}</td>
                <td>{obj.questionWord}</td>
                <td>{obj.correctAnswer}</td>
                <td>{obj.selectedAnswer}</td>
                <td>
                  {obj.correctAnswer === obj.selectedAnswer ? "✔️" : "❌"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="summary bg-white shadow-md  px-10 py-5 rounded-2xl text-xl flex flex-col justify-center items-center">
        <h3 className="text-blue-950 font-bold text-center text-2xl my-5">
          Your Result
        </h3>
        <p className="text-red-500 font-medium my-3 text-center">{`Accuracy: ${Math.ceil(
          (correctAnswers / answers.length) * 100
        )}%`}</p>
        <p className="text-red-500 font-medium my-3 text-center">{`Correctly Answered: ${correctAnswers}`}</p>
        <p className="text-red-500 font-medium mb-5 text-center">{`Incorrectly Answered: ${
          answers.length - correctAnswers
        }`}</p>
      </div>
    </>
  );
};

export default Results;
