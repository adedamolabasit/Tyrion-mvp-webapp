import React from "react";
import error1 from "../../assets/amico.svg";
import logo from "../../assets/logoo.svg";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="pt-[50px] text-center">
      <img src={logo} alt="" className="mx-auto mb-[50px] md:mb-[100px] " />
      <div className="pt-[80px] md:pt-0">
        <img src={error1} alt="" className="mx-auto w-[20%] h-[10%]" />
        <h1 className="text-sm md:text-base">Oops! Page do not exist.</h1>
        <p className="text-sm md:text-base">
          Go back to{" "}
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => navigate("/")}
          >
            home
          </span>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
