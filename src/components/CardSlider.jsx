import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/card1.png";
import img2 from "../images/card2.png";
import img3 from "../images/card3.png";
import img4 from "../images/card4.png";
import img5 from "../images/card5.png";
import img6 from "../images/card6.png";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="flex h-[378px] w-[216px] px-[6px] py-[12px]  flex-col gap-x-3 bg-[#FFF] ">
            <h3>
              <img src={img6} />
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#262626] whitespace-nowrap text-center leading-[20px] ">
                G3X Touch™ for Experimental Aircraft GDU 450
              </p>
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#0363CA] whitespace-nowrap text-center leading-[20px] ">
                ৳ 1,400
              </p>
              <button className="font-fontBold w-[216px] h-[42px] rounded-sm px-[12px] py-[24px] justify-center align-bottom bg-[#0487E2] text-[#FFF] ">
                Add to cart
              </button>
            </h3>
          </div>
          <div className="flex h-[378px] w-[216px] px-[6px] py-[12px] flex-col gap-x-3 bg-[#FFF] ">
            <h3>
              <img src={img1} />
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#262626] whitespace-nowrap text-center leading-[20px] ">
                GNC 215 NAV/COMM
              </p>
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#0363CA] whitespace-nowrap text-center leading-[20px] ">
                ৳ 2,400
              </p>
              <button className="font-fontBold w-[216px] h-[42px] rounded-sm px-[12px] py-[24px] justify-center align-middle bg-[#0487E2] text-[#FFF] ">
                Add to cart
              </button>
            </h3>
          </div>
          <div className="flex h-[378px] w-[216px] px-[6px] py-[12px] flex-col gap-x-3 bg-[#FFF] ">
            <h3>
              <img src={img2} />
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#262626] whitespace-nowrap text-center leading-[20px] ">
                GARMIN GTR 205
              </p>
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#0363CA] whitespace-nowrap text-center leading-[20px] ">
                ৳ 3,900
              </p>
              <button className="font-fontBold w-[216px] h-[42px] rounded-sm px-[12px] py-[24px] justify-center align-middle bg-[#0487E2] text-[#FFF] ">
                Add to cart
              </button>
            </h3>
          </div>
          <div className="flex h-[378px] w-[216px] px-[6px] py-[12px] flex-col gap-x-3 bg-[#FFF] ">
            <h3>
              <img src={img3} />
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#262626] whitespace-nowrap text-center leading-[20px] ">
                D2™ Mach 1 PRO
              </p>
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#0363CA] whitespace-nowrap text-center leading-[20px] ">
                ৳ 1,400
              </p>
              <button className="font-fontBold w-[216px] h-[42px] rounded-sm px-[12px] py-[24px] justify-center align-middle bg-[#0487E2] text-[#FFF] ">
                Add to cart
              </button>
            </h3>
          </div>
          <div className="flex h-[378px] w-[216px] px-[6px] py-[12px] flex-col gap-x-3 bg-[#FFF] ">
            <h3>
              <img src={img4} />
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#262626] whitespace-nowrap text-center leading-[20px] ">
                BOSE A30 - XLR5 PLUG, STRAIGHT CORD - WITHOUT BLUETOOTH
              </p>
              <p className="font-fontRegular text-[16px] overflow-hidden text-[#0363CA] whitespace-nowrap text-center leading-[20px] ">
                ৳ 1,400
              </p>
              <button className="font-fontBold w-[216px] h-[42px] rounded-sm px-[12px] py-[24px] justify-center align-middle bg-[#0487E2] text-[#FFF] ">
                Add to cart
              </button>
            </h3>
          </div>
          <div className="flex h-[378px] w-[216px] px-[6px] py-[12px] flex-col gap-x-3 bg-[#FFF] ">
            <h3>
              <img src={img5} />
              <button className="font-fontBold w-[216px] h-[42px] rounded-sm px-[12px] py-[24px] justify-center align-middle bg-[#0487E2] text-[#FFF] ">
                Add to cart
              </button>
            </h3>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default CardSlider;
