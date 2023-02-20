import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

function RatesPage() {
  const navigate = useNavigate();

  // const location = useLocation();
  return (
    <div className="font-DMSans overflow-x-hidden pt-12">
      {/* header */}
      <Navigation />

      {/* body */}
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-6xl mt-10 md:mt-20 mb-1">
          Rates calculator
        </h1>
        <p className="font-medium md:text-2xl text-[#00000069] mb-8 md:mb-16">
          Get the current value for your transaction
        </p>
        <div className="md:w-981 w-[353px] h-auto bg-[#fbc108] py-10 md:py-24 px-9 md:px-32 rounded-lg m-5 md:mb-11">
          <form>
            <select className="w-[275px] md:w-717 h-[30px] md:h-16 px-3 md:px-6 rounded-lg ">
              <option value="giftcard" className="">
                <label className="text-[#3E3B3B] text-sm font-bold  md:text-xl">
                  Select giftcard
                </label>
              </option>
            </select>
            <select className="md:w-717 w-[275px] h-[30px] md:h-16 px-3. md:px-6 rounded-lg mt-3.5 md:mt-7">
              <option
                value="category"
                className="text-[#3E3B3B] pl-2 text-sm md:text-xl"
              >
                Select card category
              </option>
            </select>
            <select className="md:w-717 w-[275px] h-[30px] md:h-16 px-3 md:px-6 rounded-lg mt-3.5 md:mt-7">
              <option
                value="amount"
                className="text-[#3E3B3B] pl-2 text-sm md:text-xl"
              >
                Amount in USD
              </option>
            </select>
          </form>
        </div>
        {/* conversion */}
        <h1 className="font-bold text-2xl md:text-6xl">= N 23,500</h1>
        <h4 className="font-medium md:text-2xl mb-8 md:mb-16 text-[#00000069]">
          based on current rate
        </h4>
        <h1 className="font-bold text-2xl md:text-5xl mb-4 md:mb-8">
          To get started
        </h1>
        <div className="flex md:gap-12 gap-6 md:mb-40 mb-20">
          <button
            className="md:w-280 w-[131px]  rounded-lg md:h-14 h-[37px] bg-[#FBC108] text-white font-medium text-xs md:text-xl hover:bg-[#FFCC00]"
            onClick={() => navigate("/sign-up")}
          >
            Create an account
          </button>
          <button
            className="border border-[#FBC108] border-2px md:w-52 w-[98px] h-[37px] md:h-14 rounded-lg text-xs md:text-xl font-medium  hover:bg-[#fbc108] hover:text-white hover:border-none"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatesPage;
