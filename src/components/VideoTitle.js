import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[25%] md:px-10 px-4 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="text-sm py-6 w-1/4 hidden md:inline-block">{overview}</p>
      <div className="box-border">
        <button className="bg-white p-1 md:p-3 md:w-28 w-20 mt-4 md:mt-0  text-lg text-black rounded-lg text-center hover:bg-opacity-80">
          <FaPlay className="inline" /> Play
        </button>
        <button className="bg-gray-700 p-3 w-28 mx-2 text-lg opacity-90 text-white rounded-lg md:inline-block hidden">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
