import React from "react";
import Logo from "../assets/images/MotionArtEffect-logo.png";

const Home = () => {
  return (
    <div className="xl:flex pt-16 items-center 2x2:mx-60 xl:mx-20 mx-5 justify-between">
      <img
        className="cursor-pointer w-2/4 md:w-auto"
        src={Logo}
        alt="logo image"
      />
      <div className="opacity-0 xl:opacity-100 ">
        <button className="bg-white rounded-md font-black font-normal xl:font-3xl font-outfit text-black hover:bg-transparent border hover:text-white py-4 px-9 transition duration-500 ease-in-out pointer-events-auto">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Home;
