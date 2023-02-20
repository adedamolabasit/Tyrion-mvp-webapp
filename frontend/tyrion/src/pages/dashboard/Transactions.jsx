import React from "react";

function Transactions() {
  return (
    <div className="h-screen w-full ml-[10px]">
      <div className="flex justify-between  mb-[101px]">
        <div className="">
          <h2 className="text-xl font-medium text-[#FBC108DC]">
            Tyrion balance:
          </h2>
          <p className="font-bold text-xl mb-[76px]"> 24,800 token</p>
        </div>
        <div className="">
          <h2 className="text-xl font-medium text-[#FBC108DC] ">
            Naira balance:
          </h2>
          <p className="font-bold text-xl mb-[40px]">N234,500</p>
        </div>
      </div>
      <div className="mb-[32px]">
        <h6 className="font-bold text-[#FC3C3C]">Buy</h6>
        <div className="flex justify-between">
          <p className="text-2xl">Amazon gift card</p>
          <p className="text-[#FBC108DC] text-3xl font-bold">N234,500</p>
          <p className="text-xl">From tyrion wallet</p>
        </div>
      </div>
      <div>September 20th, 8:25pm.</div>
    </div>
  );
}

export default Transactions;
