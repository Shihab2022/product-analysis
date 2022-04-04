import React from "react";

const Home = () => {
  return (
    <div>
      <div className="slider-part  md:flex md:justify-between items-center px-5 my-5 md:px-20 md:my-10">
      <div className="md:w-3/5  md:mr-5">
          <h1 className="md:text-6xl  text-4xl font-mono font-extrabold my-5 text-red-400 ">
            OUR <span className="text-lime-700">LATEST</span> BIKE
          </h1>
          <h2 className=" md:text-5xl text-3xl my-3 font-mono font-bold">
            YAMAHA <span className="text-yellow-800">FZ-5</span>
          </h2>
          <p className="md:text-xl my-5 text-zinc-500">
            This bike is a popular choice for its half-fairing, upright seating
            position, and underseat exhaust. These features position it between
            a full supersport and a naked streetfighter .
          </p>

          <button className="py-3 rounded-md text-white text-xl my-5 px-8 bg-red-500">
            Live demo
          </button>
        </div>
        <div className="">
          <img
            className="h-[100%] w-[90%]  rounded-lg md:ml-5"
            src={`https://im.rediff.com/getahead/2014/jul/08yamaha-fz-f1-fz-s-1.jpg`}
            alt=""
          />
        </div>

     
      </div>
    </div>
  );
};

export default Home;
