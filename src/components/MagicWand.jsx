import React from "react";
import { GoArrowRight } from "react-icons/go";
import MagicStick from "../assets/images/motionarteffect-img5.png";

const MagicWand = () => {
  return (
    <div className="text-[#EEE5FF] flex items-center justify-between 2xl:px-60 xl:px-32 lg:px-10 md:px-8 px-5 mb-20 flex-col md:flex-row">
      <div className="md:w-1/2">
        <h2 className="text-[25px] md:text-[30px] xl:text-[40px] leading-[45px] md:leading-[50px] xl:leading-[60px] font-sora font-medium md:text-start text-center">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h2>
        <p className="text-[#EEE5FFBD] font-outfit md:text-lg mt-2 md:text-start text-center">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button
          className="text-white font-sora mt-5 text-xl py-4 px-9 flex items-center gap-4 rounded-[20px] mx-auto md:mx-0 md:mb-0 mb-10"
          style={{
            backgroundImage: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
            borderRadius: "20px",
          }}
        >
          Purchase From Envato <GoArrowRight />
        </button>
      </div>
      <div className="w-[300px]">
        <img src={MagicStick} alt="" />
      </div>
    </div>
  );
};

export default MagicWand;
