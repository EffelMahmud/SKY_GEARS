import Logo from "../assets/Asset 1@4x 1.png";
import { Link } from "react-router-dom";
import { SearchIcon } from "../svg/Search";
import { CartIcon } from "../svg/Cart";
import { UserIcon } from "../svg/User";

const NavBarB = () => {
  return (
    <>
      <div className=" flex items-center justify-between bg-[#00000014]  border-[#292D32] border-spacing-7 w-[1440px] h-[80px] flex-shrink-0 px-10">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center gap-x-2 ">
          <Link
            to="/"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            Shop
          </Link>
          <Link
            to="/products"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            Blog
          </Link>
        </div>
        <div className="relative">
          <div>
            <input
              type="search"
              placeholder="Search Products"
              className="font-fontRegular border-[1px] border-[#BEBEBE] border-solid w-[416px] h-[47.99883px] rounded-sm p-[20px] "
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-[12px] bg-[#0487E2] rounded-sm ">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-2 ">
          <Link
            to="/"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            <CartIcon />
          </Link>
          <Link
            to="/"
            className="text-[#263746] align-middle font-fontRegular text-[14px] h-[20px] px-2"
          >
            <UserIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarB;
