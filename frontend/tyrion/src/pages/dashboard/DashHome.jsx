import React from "react";
import add from "../../assets/add.svg";
import chart from "../../assets/Chart.svg";

function DashHome() {
  return (
    // container
    <div className="container md:ml-[75px] w-full">
      {/* top item */}
      <div className="bg-[#5D5B5B] text-white md:pt-[29px] pt-[15px] md:pl-[52px] pl-[30px] md:pb-[35px] pb-[18px] rounded-lg w-[328px]  md:w-[508px] md:mx-0 mx-auto md:mb-[46px] mb-[16px] ">
        <h4 className="md:text-2xl text-sm text-[#ffffff86]">Naira account</h4>
        <h5 className="font-bold md:text-5xl text-3xl md:mb-[20px] ">
          N234,500
        </h5>
        <div className="flex text-[#ffffff86] items-center gap-[10px]  ">
          <button>
            <img src={add} alt="" className="w-[10px] " />
          </button>
          <p className="text-xs md:text-base">fund account</p>
        </div>
      </div>
      {/* bottom flex */}
      <div className="flex md:gap-[27px] gap-[16px] flex-col md:flex-row md:mb-[102px] mb-[30px] ">
        {/* left */}
        <div className=" bg-[#5D5B5B] md:pl-[33px] md:pt-[33px] md:pr-[25px] md:pb-[27px] text-white rounded-lg pl-[30px] pt-[16px] pb-[13px] w-[328px]  md:mx-0 mx-auto">
          <h1 className="text-[#ffffff] opacity-[87%] md:text-2xl text-xs mb-[12px]  md:mb-[24px] ">
            Tyrion balance
          </h1>
          <div className="flex md:gap-[10px] gap-[10px] mb-[12px]  md:mb-[24px] font-bold ">
            <h6 className="md:text-4xl text-lg ">54,000</h6>
            <span className="text-[#ffffff] self-end opacity-[87%] md:text-sm text-xs  font-normal">
              tyrion token
            </span>
          </div>
          <div className="flex items-center gap-[22px] md:gap-[15px] ">
            <button className="md:w-[98px] w-[49px] h-[20px] md:h-[40px] bg-[#FBC108] opacity-[86%] md:rounded-[7px] rounded-[4px] md:text-base text-[8px] ">
              Convert
            </button>
            <button className="md:w-[98px] w-[49px] h-[20px] md:h-[40px] bg-[#FBC108] opacity-[86%] md:rounded-[7px] rounded-[4px] md:text-base text-[8px] ">
              Buy
            </button>
            <button className="md:w-[98px] w-[49px] h-[20px] md:h-[40px] bg-[#FBC108] opacity-[86%] md:rounded-[7px] rounded-[4px] md:text-base text-[8px] ">
              Sell
            </button>
          </div>
        </div>
        {/* right */}
        <div className=" bg-[#5D5B5B] md:pl-[33px] md:pt-[33px] md:pr-[25px] md:pb-[27px] text-white rounded-lg pl-[30px] pt-[16px] pb-[13px] w-[328px] md:mx-0  mx-auto">
          <h1 className="text-[#ffffff] opacity-[87%] md:text-2xl text-xs mb-[12px]  md:mb-[24px] ">
            Near balance
          </h1>
          <div className="flex md:gap-[10px] gap-[10px] mb-[12px]  md:mb-[24px] font-bold ">
            <h6 className="md:text-4xl text-lg ">878 NEAR</h6>
          </div>
          <div className="flex items-center gap-[22px] md:gap-[15px] ">
            <button className="md:w-[98px] w-[49px] h-[20px] md:h-[40px] bg-[#FBC108] opacity-[86%] md:rounded-[7px] rounded-[4px] md:text-base text-[8px] ">
              Convert
            </button>
            <button className="md:w-[98px] w-[49px] h-[20px] md:h-[40px] bg-[#FBC108] opacity-[86%] md:rounded-[7px] rounded-[4px] md:text-base text-[8px] ">
              Buy
            </button>
            <button className="md:w-[98px] w-[49px] h-[20px] md:h-[40px] bg-[#FBC108] opacity-[86%] md:rounded-[7px] rounded-[4px] md:text-base text-[8px] ">
              Sell
            </button>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="ml-[30px] md:ml-0 ">
        <h1 className="md:text-2xl md:mb-[40px] mb-[18px] ">Trading Chart</h1>
        {/* chart will be displayed here */}
        <img src={chart} alt="" className="md:w-[675px] md:h-[262px] " />
        {/* chart ends */}
      </div>
    </div>
  );
}

export default DashHome;
