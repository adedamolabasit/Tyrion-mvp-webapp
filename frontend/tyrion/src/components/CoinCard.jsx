import React from "react";

function CoinCard({ icon, name, price, inDollar }) {
  return (
    <div className=" flex items-center ">
      <div className="flex items-center md:gap-[16px] ">
        <img src={icon} alt="" />
        <h5 className="font-medium text-xs md:text-2xl w-[33px] md:w-[200px] mr-[45px] md:mr-0  ">
          {name}
        </h5>
      </div>

      <div>
        <h6 className="text xs md:text-xl w-[120px]  md:w-[200px]">{price}</h6>
        <h6 className="text-xs md:text-base w-[120px]  md:w-[200px] text-[#8D8D8D] ">
          {inDollar}
        </h6>
      </div>
      <div className="flex gap-[43px] md:gap-[93px]">
        <button className="md:px-[15px] px-[5px] md:text-4xl bg-gradient-to-r from-[#FBC108] to-[#FFC406] text-white rounded-[4px] md:rounded-lg">
          +
        </button>
        <button className="md:px-[15px] px-[5px]  md:text-4xl bg-gradient-to-r from-[#FBC108] to-[#FFC406] text-white rounded-[4px] md:rounded-lg">
          -
        </button>
      </div>
    </div>
  );
}

export default CoinCard;
