import { useState } from "react";
import { Link } from "react-router-dom";
import SideNavbar from "../SideBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-end items-end sm:hidden "
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className=" flex flex-row justify-between items-center bg-[#242831]  border-none p-[10px] w-full text-[white]">
          <div>
            <img
              className="h-[48px] w-[48px]"
              src="/Image/Group2.svg"
              alt="logo"
            />
          </div>

          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      <nav className="py-3 hidden sm:flex  justify-center items-center md:flex md:flex-row md:justify-around md:items-center fixed w-full ">
        <div className="h-[64px] w-[64px] ml-[55px] my-[10px] flex justify-center items-center">
          <img
            className="h-[48px] w-[48px]"
            src="/Image/Group2.svg"
            alt="logo"
          />
        </div>
        <ul
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          className=" navbarBg w-[90%] flex-wrap h-[90px]
          p-[20px] flex justify-around items-center md:w-[930px] font-[BarlowCondensed] text-[white]  "
        >
          <Link to="/">
            <li className="text-[#FFFFFF] mr-[11px] text-[16px]hover:text-[20px]  hover:text-[20px] uppercase font-[BarlowCondensed] font-[400]">
              <span className="text-[#FFFFFF] mr-[11px] text-[16px] font-bold  uppercase font-[BarlowCondensed] ">
                00
              </span>{" "}
              Home
            </li>
          </Link>
          <Link to="/destination">
            <li className="text-[#FFFFFF] mr-[11px] text-[16px]   hover:text-[20px]  uppercase font-[BarlowCondensed] font-[400]">
              <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
                01
              </span>{" "}
              DESTINATION
            </li>
          </Link>
          <Link to="/crew">
            <li className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase   hover:text-[20px] font-[BarlowCondensed] font-[400]">
              <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
                02
              </span>
              CREW
            </li>
          </Link>
          <Link to="/technology">
            <li className="text-[#FFFFFF] mr-[11px] text-[16px]   hover:text-[20px] uppercase font-[BarlowCondensed] font-[400]">
              <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
                03
              </span>
              TECHNOLOGY
            </li>
          </Link>
        </ul>
      </nav>
      {open && (
        <div className=" w-full navbarBg   flex justify-center items-center h-[30vh] sm:hidden">
          <ul className=" bg-transparent flex flex-col justify-start items-center h-[90%] ">
            <Link onClick={() => setOpen(false)} to="/">
              <li className="text-[#FFFFFF] m-[10px] text-[16px]hover:text-[20px]  hover:text-[20px] uppercase font-[BarlowCondensed] font-[400]">
                <span className="text-[#FFFFFF]  text-[16px] font-bold  uppercase font-[BarlowCondensed] ">
                  00
                </span>{" "}
                Home
              </li>
            </Link>
            <Link onClick={() => setOpen(false)} to="/destination">
              <li className="text-[#FFFFFF] m-[10px]  text-[16px]   hover:text-[20px]  uppercase font-[BarlowCondensed] font-[400]">
                <span className="text-[#FFFFFF]  text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
                  01
                </span>{" "}
                DESTINATION
              </li>
            </Link>
            <Link onClick={() => setOpen(false)} to="/crew">
              <li className="text-[#FFFFFF]  text-[16px] m-[10px]  uppercase   hover:text-[20px] font-[BarlowCondensed] font-[400]">
                <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
                  02
                </span>
                CREW
              </li>
            </Link>
            <Link onClick={() => setOpen(false)} to="/technology">
              <li className="text-[#FFFFFF] m-[10px] text-[16px]   hover:text-[20px] uppercase font-[BarlowCondensed] font-[400]">
                <span className="text-[#FFFFFF] mr-[11px] text-[16px]  uppercase font-[BarlowCondensed] font-bold ">
                  03
                </span>
                TECHNOLOGY
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};
export default NavBar;
