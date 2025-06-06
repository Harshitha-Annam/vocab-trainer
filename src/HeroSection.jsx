import React from "react";
import heroImg from "./assets/hero-image.png";
const HeroSection = () => {
  return (
    <header className="h-screen w-screen flex items-center justify-center bg-red-400 scroll-smooth">
      <section className="max-w-full h-full     lg:items-end lg:justify-end-safe ">
        <div className="content flex lg:flex-row flex-col-reverse p-5 h-full lg:p-15 ">
          <div className="hero-content lg:w-1/2 w-full h-full flex flex-col justify-center  p-5 text-amber-50 items-start">
            <h1 className="lg:text-7xl text-5xl  text-wrap font-bold p-5 m-5 fade-in delay-300">
              Master New Languages, One Word at a Time
            </h1>
            <p className=" lg:text-3xl text-2xl m-0 p-0 px-5 mx-5 fade-in delay-400">
              Practice vocabulary in different languages. Fast, fun, and free.
            </p>
            <button className="px-10 py-5 mx-10 m-5 mt-10 bg-blue-950 rounded-4xl font-medium lg:text-xl hover:transform hover:scale-110 transition-transform ease-in-out duration-300 fade-in ">
              <a href="#test-section">Start Practice</a>
            </button>
          </div>
          <div className="hero-img lg:w-1/2 w-full h-full flex justify-center items-center fade-in delay-300">
            <img
              src={heroImg}
              alt="Hero Image"
              className="w-full float-animation"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
