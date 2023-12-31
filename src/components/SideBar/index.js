import React from "react";
import { Link } from "react-router-dom";

const SideNavbar = ({ set }) => {
  return (
    <div className=" w-full navbarBg   flex justify-center items-center h-[30vh] sm:hidden">
      <ul className=" bg-transparent flex flex-col justify-start items-center h-[90%] ">
        <Link to="/">
          <li className="text-[#FFFFFF] m-[10px] text-[16px]hover:text-[20px]  hover:text-[20px] uppercase font-[BarlowCondensed] font-[400]">
            <span className="text-[#FFFFFF]  text-[16px] font-bold  uppercase font-[BarlowCondensed] ">
              00
            </span>{" "}
            Home
          </li>
        </Link>
        <Link to="/destination">
          <li className="text-[#FFFFFF] m-[10px]  text-[16px]   hover:text-[20px]  uppercase font-[BarlowCondensed] font-[400]">
            <span className="text-[#FFFFFF]  text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
              01
            </span>{" "}
            DESTINATION
          </li>
        </Link>
        <Link to="/crew">
          <li className="text-[#FFFFFF]  text-[16px] m-[10px]  uppercase   hover:text-[20px] font-[BarlowCondensed] font-[400]">
            <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
              02
            </span>
            CREW
          </li>
        </Link>
        <Link to="/technology">
          <li className="text-[#FFFFFF] m-[10px] text-[16px]   hover:text-[20px] uppercase font-[BarlowCondensed] font-[400]">
            <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
              03
            </span>
            TECHNOLOGY
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
