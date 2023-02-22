import React from "react";
import near from "../../assets/near.svg";
import swap from "../../assets/swap.svg";
// import tyrion from "../../assets/logo.svg";
import swapp from "../../assets/swapp.svg";

function SwapInterface() {
  return (
    <div className="md:mt-[58px] flex flex-col items-center md:pb-[100px] ">
      <h1 className=" md:text-2xl md:mb-[87px] text-[#00000099] ">
        Exchange Token
      </h1>
      <div className="flex items-center md:px-[24px] md:py-[17px] bg-[#FAF9F9] rounded-lg md:mb-[14px] ">
        <div className="flex  items-center md:gap-[12px] md:mr-[25px]  ">
          <img src={near} alt="" />
          <h6 className="text-[#00000099] ">NEAR</h6>
        </div>
        <div className="w-[1px] md:h-[34px] bg-black md:mr-[7px] "></div>
        <input
          type="number"
          placeholder="0"
          className="md:mr-[7px] bg-inherit placeholder:text-[#646464]  "
        />
        <h6 className="md:text-sm">MAX</h6>
      </div>
      <h4 className="md:text-sm text-[#00000099] md:mb-[32px] ">
        Available: 223 NEAR
      </h4>
      <div className="flex items-center md:gap-[28px] md:mb-[67px] text-[#00000099] ">
        <div className="md:w-[72px] md:h-[39px] flex items-center justify-center rounded-lg  bg-[#FAF9F9] ">
          0.1%
        </div>
        <div className="md:w-[72px] md:h-[39px] flex items-center justify-center rounded-lg  bg-[#FAF9F9] ">
          0.5%
        </div>
        <div className="md:w-[72px] md:h-[39px] flex items-center justify-center rounded-lg  bg-[#FAF9F9] ">
          0.75%
        </div>
        <div className="md:w-[72px] md:h-[39px] flex items-center justify-center rounded-lg  bg-[#FAF9F9] ">
          <input type="number" className="md:w-[50px] md:h-[20px] bg-inherit" />
        </div>
      </div>
      <div className="flex items-center md:mb-[73px] ">
        <div className="bg-black md:w-[110px] md:h-[1px] rounded-full "></div>
        <button>
          <img src={swap} alt="" />
        </button>
        <div className="bg-black md:w-[110px] md:h-[1px] rounded-full "></div>
      </div>
      <div className="flex items-center md:px-[24px] md:py-[17px] bg-[#FAF9F9] rounded-lg md:mb-[14px] ">
        <div className="flex  items-center md:gap-[12px] md:mr-[25px]  ">
          {/* <img src={tyrion} alt="" /> */}
          <h6 className="text-[#00000099] ">Tyrion</h6>
        </div>
        <div className="w-[1px] md:h-[34px] bg-black md:mr-[7px] "></div>
        <input
          type="number"
          placeholder="0"
          className="md:mr-[7px] bg-inherit placeholder:text-[#646464]  "
        />
      </div>
      <h4 className="md:text-sm text-[#00000099] md:mb-[80px] ">
        1 NEAR = 5 TYR
      </h4>
      <button className="bg-[#FBC108] md:w-[250px] md:h-[60px]  flex items-center justify-center rounded-lg md:gap-[10px] md:text-lg text-white">
        <img src={swapp} alt="" />
        <h4>Proceed to swap</h4>
      </button>
    </div>
  );
}

export default SwapInterface;
