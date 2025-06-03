import React from "react";
import ref_icon from "../assets/ref_icon.svg";
import gradient_icon from "../assets/gradient_icon.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Profile from "../Profile";

function Header() {
  return (
    <>
      <header className="flex  left-[300px]  items-center justify-between fixed top-0  mb-5 bg-[#f1f1f1] pb-5 max-2xl:left-[300px] w-[calc(100vw-300px)] px-30 pt-5 z-1 min-w-0 shrink-0  max-2xl:px-10 max-lg:px-4 max-md:py-2 max-xl:w-[calc(100vw - 100px)]  max-xl:justify-end max-lg:justify-between  max-lg:left-0 max-lg:w-full  max-xl:w-full max-xl:left-0">
        <img
          src={logo}
          className="bg-none hidden max-2xl:hidden max-lg:w-50  max-xl:hidden max-lg:block max-md:w-40 max-sm:w-30"
          alt=""
        />
        <div className="flex bg-white border border-[#e4e4e4] rounded-[20px] h-10 items-center gap-3 min-w-0 flex-shrink  max-2xl:flex max-xl:hidden">
          <img src={ref_icon} a lt="" className="size-4 ml-4" />
          <span className="flex gap-2 items-center">
            <p className="text-m">Referred: </p>
            <p className="bg-gray-200 px-4 rounded-3xl">2</p>
          </span>

          <button className="h-full text-xs whitespace-nowrap text-white bg-black rounded-3xl border-none outline-none px-6">
            Copy Referral Link
          </button>
        </div>
        <ul className="flex items-center gap-3 ">
          <div className="flex bg-white border border-[#e4e4e4] rounded-[20px] h-10 items-center px-4 gap-3 max-xl:hidden">
            <h4 className="shrink whitespace-nowrap">Account Status:</h4>
            <div className="w-3xs h-2.5 bg-amber-400 border-r-[60px] border-r-[#ededed] rounded-2xl"></div>
          </div>
          <div className="flex bg-white border border-[#e4e4e4] rounded-[20px] h-10 items-center px-4 gap-3 max-md:hidden">
            <img src={gradient_icon} alt="" className="size-6" />
            <h4>Total:</h4>
            <h5>3,314.45 pt</h5>
          </div>
          <NavLink
            to={`/profile`}
            className="flex size-10 text-center items-center justify-center rounded-full  text-white no-underline [background:linear-gradient(284deg,rgba(42,123,155,1)_0%,rgba(87,199,133,1)_50%,rgba(237,221,83,1)_100%)] max-md:size-8"
          >
            R
          </NavLink>
        </ul>
      </header>
    </>
  );
}

export default Header;
