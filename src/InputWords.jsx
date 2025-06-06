import React, { useState } from "react";
import xmark from "./assets/x-button.png";
import Test from "./Test";
const InputWords = ({ lang }) => {
  const [wordPairs, setWordPairs] = useState([]);
  const [inputValues, setInputValues] = useState({
    nativeWord: "",
    foreignWord: "",
  });
  const [testStarted, setTestStarted] = useState(false);

  function handleInput(newValue, wordType) {
    setInputValues((prevObj) => {
      const updated = { ...prevObj };
      updated[wordType] = newValue;
      return updated;
    });
  }

  function handleClick() {
    setWordPairs((prevPairs) => {
      const updatedPairs = prevPairs.map((obj) => {
        return { ...obj };
      });
      if (inputValues.nativeWord.trim() && inputValues.foreignWord.trim()) {
        updatedPairs.push(inputValues);
        handleInput("", "nativeWord");
        handleInput("", "foreignWord");
      }

      return updatedPairs;
    });
  }
  function handleRemove(index) {
    console.log(index);
    console.log(wordPairs);
    setWordPairs((prevPairs) => {
      const updatedPairs = prevPairs.map((obj) => {
        return { ...obj };
      });
      updatedPairs.splice(index, 1);
      return updatedPairs;
    });
  }

  if (testStarted) {
    return <Test wordPairs={wordPairs} lang={lang} />;
  }

  return (
    <div className="m-10 p-5 w-full flex flex-col justify-center items-center bg-gray-100">
      {lang.native.trim() && lang.foreign.trim() && (
        <div className="word-inputs m-5">
          <fieldset className="bg-gray-100">
            <legend>{lang.native}</legend>
            <input
              type="text"
              value={inputValues.nativeWord}
              onChange={(e) => handleInput(e.target.value, "nativeWord")}
              className="bg-white  p-5 rounded-2xl shadow-md h-16 text-center "
            />
          </fieldset>
          <fieldset>
            <legend>{lang.foreign}</legend>
            <input
              type="text"
              value={inputValues.foreignWord}
              onChange={(e) => handleInput(e.target.value, "foreignWord")}
              className="bg-white rounded-2xl shadow-md h-16  text-center"
            />
          </fieldset>
          <div className="add-button-container">
            <button
              className="add-button px-10 py-5 m-5 bg-red-500 disabled:bg-red-400 text-white font-bold text-xl disabled:text-gray-400 rounded-2xl hover:transform hover:scale-110 transition ease-in-out duration-300"
              onClick={handleClick}>
              ADD
            </button>
          </div>
        </div>
      )}
      {wordPairs.length > 0 && (
        <>
          <div className="bg-blue-950 text-white rounded-2xl p-10 text-xl">
            <table>
              <thead className="font-bold text-red-500">
                <tr>
                  <td>SNo</td>
                  <td>Native</td>
                  <td>Foreign</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {console.log(wordPairs)}
                {wordPairs &&
                  wordPairs.map((obj, index) => {
                    return (
                      <tr key={index} className="m-5">
                        <td className="m-3">{index + 1}</td>
                        <td className="m-3">{obj.nativeWord}</td>
                        <td className="m-3">{obj.foreignWord}</td>
                        <td className="m-3">
                          <button onClick={() => handleRemove(index)}>
                            <img src={xmark} alt="remove" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div>
            <button
              className="start-button rounded-2xl bg-blue-950 text-white text-xl disabled:bg-blue-300 hover:transform hover:scale-110 transition duration-300 ease-in-out disabled:hover:scale-100"
              disabled={wordPairs.length < 5}
              onClick={() => {
                setTestStarted((prev) => !prev);
              }}>
              START TEST
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InputWords;
