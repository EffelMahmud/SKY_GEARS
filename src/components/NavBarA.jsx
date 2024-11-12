import { FacebookIcon } from "../svg/Facebook";
import { InstragramIcon } from "../svg/Instragram";
import { TwitterIcon } from "../svg/Twitter";
import { Link } from "react-router-dom";
const NavBarA = () => {
  return (
    <>
      <div className=" flex items-center justify-between bg-[#0363CA] w-[1440px] h-[30px] flex-shrink-0 px-10">
        <div>
          <span className="font-fontInter text-[13px] text-[#ffffff] ">
            Hotline: +0186-1123325
          </span>
        </div>
        <div className=" flex items-center gap-x-7">
          <div>
            <span className="font-fontInter text-[13px] text-[#ffffff] ">
              Contact Us
            </span>
          </div>
          <div className="flex items-center gap-x-2 ">
            <Link
              to="/"
              className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="/"
              className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
            >
              <InstragramIcon />
            </Link>
            <Link
              to="/"
              className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarA;
