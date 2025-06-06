import React from "react";

const WorkingGuide = () => {
  return (
    <section
      className="features-section w-screen lg:h-screen p-5 items-center flex flex-col bg-gray-100 scroll-smooth"
      id="test-section">
      <div className="section-heading m-5 p-5 ">
        <h1 className="w-full text-center text-5xl lg:text-6xl text-blue-950 font-bold  ">
          How Does It Work
        </h1>
      </div>
      <div className="features-list w-full m-5 p-5 h-full lg:max-w-[70vw] lg:w-[70vw] flex items-center justify-center  lg:h-[60vh] lg:mt-20 ">
        <ul className="cards-list grid lg:grid-cols-3 grid-cols-1  lg:h-full w-full p-5 gap-10  lg:gap-20">
          <li className="card bg-white rounded-xl shadow-md  hover:transform transition-translate hover:-translate-y-3.5 ease-in-out duration-300 min-h-[300px] lg:h-full ">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full flex justify-center">
                {/* <img
                  src="book-open-check.svg"
                  alt="practice"
                  className="w-22 rounded-b-full text-blue-950 bg-red-400 p-3"
                /> */}
                <h1 className="font-bold text-4xl w-22 text-center rounded-b-full text-blue-950 bg-red-400 p-3">
                  1
                </h1>
              </div>
              <div className="card-content h-full p-5 lg:p-8 flex flex-col items-center justify-center gap-5 text-blue-950 text-center">
                <div className="card-heading text-3xl text-wrap font-medium px-5  lg:text-4xl ">
                  <h1>Select a language pair</h1>
                </div>
                <div className="card-detail text-2xl lg:text-3xl p-3">
                  <p>For example English to Spanish.</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card bg-white rounded-xl shadow-md hover:transform transition-translate hover:-translate-y-3.5 ease-in-out duration-300 min-h-[300px] lg:h-full">
            <div className="w-full lg:h-full flex flex-col ">
              <div className="w-full flex justify-center">
                <h1 className="font-bold text-4xl w-22 text-center rounded-b-full text-blue-950 bg-red-400 p-3">
                  2
                </h1>
              </div>
              <div className="card-content lg:h-full p-5 lg:p-8 flex flex-col items-center justify-center gap-5 text-blue-950 text-center">
                <div className="card-heading text-3xl text-wrap font-medium px-5  lg:text-4xl ">
                  <h1>Enter Your Own Vocabulary List</h1>
                </div>
                <div className="card-detail text-2xl lg:text-3xl p-3">
                  <p>
                    Enter the list of words and their translations you want to
                    study.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="card bg-white rounded-xl shadow-md hover:transform transition-translate hover:-translate-y-3.5 ease-in-out duration-300 min-h-[300px] lg:h-full">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full flex justify-center">
                <h1 className="font-bold text-4xl w-22 text-center rounded-b-full text-blue-950 bg-red-400 p-3">
                  3
                </h1>
              </div>
              <div className="card-content h-full p-5 lg:p-8 flex flex-col items-center justify-center gap-5 text-blue-950 text-center">
                <div className="card-heading text-3xl text-wrap font-medium px-5  lg:text-4xl ">
                  <h1>Practice with instant Feedback</h1>
                </div>
                <div className="card-detail text-2xl lg:text-3xl p-3">
                  <p>
                    Answer the questions and keep track of you accuracy and
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkingGuide;
