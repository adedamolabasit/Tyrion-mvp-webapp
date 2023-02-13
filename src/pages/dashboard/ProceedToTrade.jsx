import React from "react";
import time from "../../assets/time.svg";
import copy from "../../assets/copy.svg";
import Chatbox from "./Chatbox";
import Button from "../../components/Button";
import notif from "../../assets/notif.svg";

function ProceedToTrade() {
  return (
    <div className="h-full w-[1000px] md:px-[60px] bg-[#FCFCF6] md:mt-[-75px] md:pt-[53px] md:pb-[50px] ">
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
          <h6 className="text-[#FBC108] md:text-xl ">Tyrion Balance:</h6>
          <p className="text-[#656565] md:text-2xl font-bold ">28,000 tokens</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" self-center">
          <h1 className="text-center">To send:</h1>
          <h6 className="font-bold md:text-4xl">N234,500</h6>
        </div>
        <div className="flex items-center md:mt-[-40px] self-end">
          <h6>
            <span className="text-[#00000091] ">contact info:</span>
            <span className="text-[#000000cc] "> 09049013384 </span>
          </h6>
          <img src={copy} alt="" />
        </div>
      </div>
      <Chatbox />
      <div className="flex justify-center md:mt-[32px] ">
        <Button
          width="md:w-[254px]"
          height="md:h-[60px]"
          bg="bg-[#fcb108] "
          radius="rounded-lg"
          color="text-white"
        >
          <div className="flex justify-center items-center gap-2">
            <img src={notif} alt="" />
            <p>Payment made</p>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ProceedToTrade;
