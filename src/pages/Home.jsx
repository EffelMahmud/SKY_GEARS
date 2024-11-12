import { useState } from "react";
import NavBarA from "../components/NavBarA";
import NavBarB from "../components/NavBarB";
import ImageSlider from "../components/ImageSlider";
import img1 from "../images/imageb1.jpg";
import CardSlider from "../components/CardSlider";
const Home = () => {
  return (
    <>
      <div className="flex   items-center max-w-[1440px] w-full flex-shrink-0 space-y-16 ">
        <div className="flex flex-col items-center space-x-0">
          <div>
            <NavBarA />
            <NavBarB />
          </div>
          <div className="mt-[2px] flex items-center">
            <ImageSlider />
          </div>
          {/**Get Exclusive Custom Parts portion */}
          <div className="  w-[1440px] grid grid-cols-2 items-center  ">
            <div className=" w-[708px] h-[403px] mr-0 ">
              <img src={img1} />
            </div>
            <div className="bg-[#4493FA] w-[708px] h-[403px] ml-0 ">
              <div className="absolute p-10 gap-y-2 ">
                <h1 className="text-[#FFF] font-fontRegular text-[36px] ">
                  Get Exclusive Custom Parts
                </h1>
                <p className="text-[#FFF] font-fontRegular text-[16px]">
                  Sky Gears has been the supplier that aircraft builders,
                  owners, pilots, and aviation businesses have depended on since
                  1965. We carry a wide selection of aircraft parts.
                </p>
                <button className="text-[#000000] font-fontRegular text-[16px] border-spacing-1 bg-[#FFFFFF] cursor-pointer w-[120px] h-[42px] gap-y-5 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[548px] bg-[#00000014] flex-shrink-0 mt-20 ">
            <div className="gap-x-20 gap-y-20">
              <span className="text-[#0487E2] font-fontRegular text-[24px] mt-7 mb-7 ">
                Featured Products
              </span>
            </div>
            <div className="w-[1440px] h-[548px] bg-[#00000014] flex-shrink-0  gap-y-10 ">
              <CardSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
