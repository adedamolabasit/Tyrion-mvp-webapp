import React from "react";
import Button from "./Button";
import move from "../../src/assets/move.svg";

function BuyCheckout() {
  // hello dev
  return (
    <div className="bg-[#EAEAEA] h-full w-screen flex items-center justify-center  ">
      <div className="md:py-[115px] md:px-[65px] bg-white md:w-[672px] md:h-[797px] rounded-lg  ">
        <div className="md:mb-[82px] ">
          <Button
            bg={"bg-[#FBC108db]"}
            height={"md:h-[56px]"}
            width={"md:w-[168px] "}
            radius={"rounded-lg"}
            color={"text-white"}
          >
            Buy
          </Button>
        </div>

        <div className="flex items-center justify-between md:mb-[59px] ">
          <div>
            <h1 className="text-[#0000005e] ">Rates:</h1>
            <p className="text-[#060606] font-bold md:text-2xl ">250/USD</p>
          </div>
          <div>
            <h1 className="text-[#0000005e] ">Range:</h1>
            <p className="text-[#060606] font-bold md:text-2xl ">$20-$500</p>
          </div>
          <div>
            <h1 className="text-[#0000005e] ">Assets</h1>
            <p className="text-[#060606] font-bold md:text-2xl ">
              Amazon giftcard
            </p>
          </div>
        </div>
        <div className="md:w-[333px] md:mb-[61px] ">
          <div className="flex items-center md:mb-[31px] gap-2 ">
            <h6>How much do you want to buy?</h6>
            <img src={move} alt="" />
          </div>
          <input
            type="number"
            className="md:w-full md:h-[51px] bg-[#EFE9E9] rounded-lg md:pl-[12px] md:mb-[18px] "
            placeholder="Enter amount (N) "
          />
          <div className=" md:h-[2px] bg-[#FBC108] md:mb-[30px] "></div>
          <div className="flex items-center justify-between">
            <h6>You will Send;</h6>
            <h6 className="md:text-2xl">20,000 tyrion</h6>
          </div>
        </div>
        <Button
          bg={"bg-[#FBC108db]"}
          height={"md:h-[60px]"}
          width={"md:w-[254px] "}
          radius={"rounded-lg"}
          color={"text-white"}
        >
          Proceed to trade
        </Button>
      </div>
    </div>
  );
}

export default BuyCheckout;
