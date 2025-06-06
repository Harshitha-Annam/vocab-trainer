import React from "react";
import { useState } from "react";
import InputWords from "./InputWords";
import HeroSection from "./HeroSection";
import Features from "./Features";
import WorkingGuide from "./WorkingGuide";

const App = () => {
  const [lang, setLang] = useState({ native: "", foreign: "" });
  const [testStarted, setTestStarted] = useState(false);
  function handleChange(newLang, langType) {
    setLang((prevObj) => {
      const updated = { ...prevObj };
      updated[langType] = newLang;
      return updated;
    });
  }

  return (
    <>
      <HeroSection />
      <Features />
      <WorkingGuide />
      {/* <main>
        <div className="language-selector">
          <input
            type="text"
            name="native-language"
            value={lang.native}
            onChange={(e) => handleChange(e.target.value, "native")}
          />
          <span style={{ color: "white", fontSize: "25px" }}>⮀</span>
          <input
            type="text"
            name="foreign-language"
            value={lang.foreign}
            onChange={(e) => handleChange(e.target.value, "foreign")}
          />
        </div>
        <InputWords lang={lang} />
      </main> */}
      {testStarted && (
        <main className="w-screen min-h-[50vh] flex flex-col justify-center items-center bg-gray-100 p-3">
          <div className="instructions p-5 m-5 text-blue-950 max-w-[60%]">
            <h1 className="text-4xl lg:text-5xl font-bold w-full text-center">
              Instructions
            </h1>
            <ol className="list-decimal ml-5 m-5 font-medium lg:text-2xl text-xl">
              <li className="m-3">
                <p>
                  Enter any two language names out of which one must be your
                  native language and the other you want to practice the
                  vocabulary of.
                </p>
              </li>
              <li className="m-3">
                <p>
                  Enter as many pairs of words as you like with one of the words
                  in your native language and the other word it's corresponding
                  meaning in the foreign language.
                </p>
              </li>
              <li className="m-3">
                <p>
                  Start the test and get shuffled questions to answer instantly.
                  You can only move to the next question if you answer the
                  current one.
                </p>
              </li>
              <li className="m-3">
                <p>Check you accuracy and summary of your performance.</p>
              </li>
            </ol>
          </div>
          <div className="language-selector ">
            <input
              type="text"
              name="native-language"
              value={lang.native}
              onChange={(e) => handleChange(e.target.value, "native")}
              className="bg-white rounded-2xl shadow-md p-5 h-16 text-center"
              placeholder="Native Language"
            />
            <span className="text-[35px] text-blue-950 mx-5 font-bold text-center">
              ⮀
            </span>
            <input
              type="text"
              name="foreign-language"
              value={lang.foreign}
              onChange={(e) => handleChange(e.target.value, "foreign")}
              className="bg-white rounded-2xl shadow-md p-5 h-16 text-center"
              placeholder="Foreign Language"
            />
          </div>
          <InputWords lang={lang} />
        </main>
      )}
      {!testStarted && (
        <div className="last-section w-full flex justify-center">
          <div className="sample-test  flex flex-col justify-center items-center border-2 border-red-500 p-5 m-5 mb-15 rounded-2xl border-dashed relative h-[200px] w-[500px]">
            <h1 className="text-4xl font-bold text-blue-950 text-center">
              Try it Now
            </h1>
            <div className="button-test absolute -bottom-13">
              <button
                className="px-10 py-5 mx-10 m-5 mt-10 w-[300px] bg-blue-950 rounded-4xl font-medium lg:text-xl hover:transform hover:scale-110 transition-transform ease-in-out duration-300 fade-in text-white border-2 border-red-500 border-dashed "
                onClick={() => setTestStarted((prev) => !prev)}>
                Take a Sample Test
              </button>
            </div>
          </div>
        </div>
      )}

      {testStarted && (
        <div className="w-full flex flex-row justify-center items-center">
          <button
            className="bg-blue-950 text-white px-6 py-3 text-sm rounded-2xl hover:bg-transparent border-2 border-blue-950 hover:text-blue-950 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => {
              setLang((prevObj) => {
                const updated = { ...prevObj };
                updated.native = "";
                updated.foreign = "";
                return updated;
              });
              setTestStarted((prev) => !prev);
            }}>
            START AGAIN
          </button>
        </div>
      )}
      <footer className="mt-5 p-5 bg-blue-950 h-[100px] text-white flex flex-col justify-center items-center">
        Built for Learners by Learners. Lightweight and Distraction Free.
      </footer>
    </>
  );
};

export default App;
