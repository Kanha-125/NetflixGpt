import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[17%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="box-border">
        <button className="bg-white p-4 w-28 text-lg text-black rounded-lg text-center hover:bg-opacity-80">
          <FaPlay className="inline" /> Play
        </button>
        <button className="bg-gray-700 p-4 w-28 mx-2 text-lg opacity-90 text-white rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
