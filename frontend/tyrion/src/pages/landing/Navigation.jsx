import React, { useState } from "react";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import x from "../../assets/x.svg";
import hamburger from "../../assets/hamburger.png";
import hamburger1 from "../../assets/hamburger1.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function HomeHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-[#FBC108]  w-40 h-16 text-white rounded-lg font-medium text-lg  hover:bg-[#FFCC00] hidden md:block active-bg-[#fbc10886]"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
}

export function OthersHeader() {
  const navigate = useNavigate();
  return (
    <div className="hidden md:block">
      <button
        className="border-solid border-2 border-[#FBC108] mr-7  w-40 h-16 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white "
        onClick={() => navigate("/sign-in")}
      >
        Sign in
      </button>
      <button
        className="bg-[#FBC108]  w-52 h-16 text-white rounded-lg font-medium text-lg px-4 cursor-pointer hover:bg-[#FFCC00] active-bg-[#fbc10886] "
        onClick={() => navigate("/sign-up")}
      >
        Create an account
      </button>
    </div>
  );
}

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isHamburgerClick, setHamburgerClick] = useState(false);

  console.log(location.pathname);
  let colorText;
  let logo;
  let ham;
  let bgColor;
  let txtColor;
  let logoHam;

  if (location.pathname === "/") {
    colorText = "text-white";
    logo = logo2;
    logoHam = logo3;
    ham = hamburger;
    bgColor = "bg-white";
    txtColor = "text-black";
  } else {
    logo = logo3;
    logoHam = logo2;
    ham = hamburger1;
    colorText = "text-black";
    bgColor = "bg-black";
    txtColor = "text-white";
  }

  function hambugerClick() {
    setHamburgerClick((prevState) => !prevState);
  }

  return (
    <motion.div className=" mx-9 flex items-center justify-between">
      {!isHamburgerClick && (
        <img
          src={logo}
          alt=""
          className="md:w-32 md:h-14 w-16 h-7"
          onClick={() => navigate("/")}
        />
      )}
      <div
        className={`md:flex items-center ${colorText} font-medium text-base  gap-14 hidden`}
      >
        <h6
          className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/")}
        >
          Home
        </h6>
        <h6
          className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] "
          onClick={() => navigate("/about")}
        >
          About us
        </h6>
        <h6
          className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] "
          onClick={() => navigate("/rates")}
        >
          Rates
        </h6>
        <h6
          className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/faqs")}
        >
          FAQs
        </h6>
        <h6
          className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/contact")}
        >
          Contact
        </h6>
      </div>
      {location.pathname === "/" ? <HomeHeader /> : <OthersHeader />}

      {/* hamburger for mobile view */}
      {!isHamburgerClick && (
        <button className="px-2 py-2  md:hidden" onClick={hambugerClick}>
          <img src={ham} alt="" className="w-5 h-3 " />
        </button>
      )}

      <div
        className={`w-345 h-auto pt-8 pl-8 pr-6 pb-4 ${bgColor}  rounded-lg ${
          isHamburgerClick ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between mb-11">
          <img src={logoHam} alt="" className="w-16" />
          <button onClick={hambugerClick}>
            <img src={x} alt="" />
          </button>
        </div>

        <div className={`flex flex-col gap-6 ${txtColor}`}>
          <h6
            className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] focus:text-red-500"
            onClick={() => navigate("/")}
          >
            Home
          </h6>
          <h6
            className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] "
            onClick={() => navigate("/about")}
          >
            About us
          </h6>
          <h6
            className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/rates")}
          >
            Rates
          </h6>
          <h6
            className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/faqs")}
          >
            FAQs
          </h6>
          <h6
            className="nav-focus cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/contact")}
          >
            Contact
          </h6>
          <button
            className="bg-[#FBC108]  w-24 h-8 text-white rounded-lg font-medium text-sm hover:bg-[#FFCC00]"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* end */}
    </motion.div>
  );
}

export default Navigation;
