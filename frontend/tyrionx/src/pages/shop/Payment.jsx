import React from "react";

function Payment() {
  return (
    <div className="md:mt-[130px] flex flex-col items-center">
      <h1 className="font-bold text-center md:text-4xl mb-[33px] ">
        Connect your <span className="text-[#fcb108] ">wallet</span> and pay
        <br /> your bill with just one click
      </h1>
      <button className="w-[214px] h-[70px] bg-[#FBC108] rounded-lg text-white font-medium text-sm hover:bg-[#FFCC00] mb-[71px]">
        Connect wallet
      </button>
      <p className="font-medium md:text-2xl">
        Don't have a wallet?
        <span className="text-[#fcb108] active:text-[#fcb10895] focus:text-[#fcb10885]   hover:text-[#fcb10890] cursor-pointer ">
          {" "}
          Pay with the tyrion token
        </span>{" "}
      </p>
    </div>
  );
}

export default Payment;
