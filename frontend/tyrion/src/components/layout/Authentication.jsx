import React from "react";
import logo4 from "../../assets/logo4.svg";
import { useNavigate } from "react-router-dom";

function Authentication({ children }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FBC108] w-full  pt-14 md:pt-28 mb-4 md:mb-9 pb-12 md:pb-24">
      <img
        src={logo4}
        alt=""
        className="mx-auto w-24 md:w-52 h-10 md:h-20"
        onClick={() => navigate("/")}
      />
      {children}
    </div>
  );
}

export default Authentication;
