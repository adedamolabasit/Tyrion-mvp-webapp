import React from "react";
import completed from "../../assets/completed.svg";

function TradeCompleted() {
  return (
    <div className="bg-[#434040] w-screen h-screen flex items-center justify-center">
      <div className="bg-white md:py-[76px] md:px-[197px] rounded-lg ">
        <img src={completed} alt="" className="md:mb-[48px] " />
        <p className="font-bold md:text-2xl text-[#00000099] ">
          Trade Completed with Adamu3456 for N34,499 Amazon gift cards
        </p>
      </div>
    </div>
  );
}

export default TradeCompleted;
