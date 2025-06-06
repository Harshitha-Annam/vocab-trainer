import React from "react";
import Question from "./Question";
import { useState, useMemo } from "react";
import Results from "./Results";

const Test = ({ wordPairs, lang }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  function getShuffledArray(wordPairs) {
    const shuffledArray = [];
    const arrayCopy = wordPairs.map((obj) => {
      return { ...obj };
    });
    let n = arrayCopy.length;
    while (n) {
      let index = Math.floor(Math.random() * n--);
      shuffledArray.push(arrayCopy[index]);
      arrayCopy.splice(index, 1);
    }
    return shuffledArray;
  }

  // const questions = getShuffledArray(wordPairs);
  const questions = useMemo(() => getShuffledArray(wordPairs), [wordPairs]);
  // const answers = [];
  // let questionIndex = 0;

  function handleNext(questionIndex) {
    if (questionIndex > -1 || questionIndex <= questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      console.log(questionIndex, questions[questionIndex]);
    }
  }
  if (questionIndex == questions.length) {
    return <Results answers={answers} />;
  }
  function collectAnswers(questionIndex, answer) {
    setAnswers((prev) => {
      const updatedArray = prev.map((obj) => {
        return { ...obj };
      });

      updatedArray.push({
        questionIndex: questionIndex,
        questionWord: questions[questionIndex].nativeWord,
        selectedAnswer: answer,
        correctAnswer: questions[questionIndex].foreignWord,
      });
      return updatedArray;
    });
  }
  return (
    <div className="test m-10 p-5 flex flex-col justify-center items-center ">
      <h1 className="my-5 text-2xl text-blue-950 font-medium">
        Test in Progress
      </h1>
      <Question
        questionIndex={questionIndex}
        questionWord={questions[questionIndex].nativeWord}
        lang={lang}
        handleNext={handleNext}
        totalQuestions={questions.length}
        getSelectedAnswer={collectAnswers}
      />
    </div>
  );
};

export default Test;
