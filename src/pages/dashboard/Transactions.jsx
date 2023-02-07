import React from "react";
import time from "../../assets/time.svg";
import copy from "../../assets/copy.svg";

function Transactions() {
  return (
    <div className="h-screen w-[1000px] md:px-[60px] bg-[#FCFCF6] md:mt-[-75px] md:pt-[53px] ">
      <div className="flex justify-between md:mb-[28px] ">
        <div className="flex items-center md:gap-[27px] ">
          <img src={time} alt="" />
          <h6 className="font-bold md:text-2xl">35:00</h6>
        </div>
        <div className="flex flex-col items-end">
          <h6 className="text-[#FBC108] text-xl ">Naira Balance:</h6>
          <p className="text-[#656565] text-2xl font-bold ">N234,500</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <h6>Account details:</h6>
          <div className="flex items-center">
            <h6 className="font-bold">2245667890</h6>
            <img src={copy} alt="" />
          </div>
          <h6 className="font-bold">Zenith bank</h6>
          <h6 className="font-bold"> Thechemdesigner</h6>
        </div>
        <div className="flex flex-col items-end">
          <h6 className="text-[#FBC108] text-xl ">Tyrion Balance:</h6>
          <p className="text-[#656565] text-2xl font-bold ">28,000 tokens</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className=" self-center">
          <h1>To send:</h1>
          <h6>N234,500</h6>
        </div>
        <div className="flex items-center self-end">
          <h6> contact info: 09049013384 </h6>
          <img src={copy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
