import React from "react";

const Features = () => {
  return (
    <section className="features-section w-screen lg:h-screen p-5 items-center flex flex-col bg-gray-100">
      <div className="section-heading m-5 p-5 ">
        <h1 className="w-full text-center text-5xl lg:text-6xl text-blue-950 font-bold  ">
          Features
        </h1>
      </div>
      <div className="features-list w-full m-5 p-5 h-full lg:max-w-[70vw] lg:w-[70vw] flex items-center justify-center  lg:h-[60vh] lg:mt-20 ">
        <ul className="cards-list grid lg:grid-cols-3 grid-cols-1  lg:h-full w-full p-5 gap-10  lg:gap-20">
          <li className="card bg-white rounded-xl shadow-md  hover:transform transition-translate hover:-translate-y-3.5 ease-in-out duration-300 min-h-[300px] lg:h-full ">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full flex justify-center">
                <img
                  src="book-open-check.svg"
                  alt="practice"
                  className="w-22 rounded-b-full text-blue-950 bg-red-400 p-3"
                />
              </div>
              <div className="card-content h-full p-5 lg:p-8 flex flex-col items-center justify-center gap-5 text-blue-950 text-center">
                <div className="card-heading text-3xl text-wrap font-medium px-5  lg:text-4xl ">
                  <h1>No Sign-Up Required</h1>
                </div>
                <div className="card-detail text-2xl lg:text-3xl p-3">
                  <p>Jump Straight in and start practicing.</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card bg-white rounded-xl shadow-md hover:transform transition-translate hover:-translate-y-3.5 ease-in-out duration-300 min-h-[300px] lg:h-full">
            <div className="w-full lg:h-full flex flex-col ">
              <div className="w-full flex justify-center">
                <img
                  src="languages.svg"
                  alt="practice"
                  className="w-22 rounded-b-full text-blue-950 bg-red-400 p-3"
                />
              </div>
              <div className="card-content lg:h-full p-5 lg:p-8 flex flex-col items-center justify-center gap-5 text-blue-950 text-center">
                <div className="card-heading text-3xl text-wrap font-medium px-5  lg:text-4xl ">
                  <h1>Multi Language Support</h1>
                </div>
                <div className="card-detail text-2xl lg:text-3xl p-3">
                  <p>
                    Supports popular languages like spanish, german, french and
                    more.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="card bg-white rounded-xl shadow-md hover:transform transition-translate hover:-translate-y-3.5 ease-in-out duration-300 min-h-[300px] lg:h-full">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full flex justify-center">
                <img
                  src="lightbulb.svg"
                  alt="practice"
                  className="w-22 rounded-b-full text-blue-950 bg-red-400 p-3"
                />
              </div>
              <div className="card-content h-full p-5 lg:p-8 flex flex-col items-center justify-center gap-5 text-blue-950 text-center">
                <div className="card-heading text-3xl text-wrap font-medium px-5  lg:text-4xl ">
                  <h1>Smart Practice Mode</h1>
                </div>
                <div className="card-detail text-2xl lg:text-3xl p-3">
                  <p>
                    Get shuffled questions, track your accuracy and progress
                    locally.
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

export default Features;
