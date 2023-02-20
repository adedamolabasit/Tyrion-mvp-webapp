import React from "react";
import Navigation from "./Navigation";
import radio from "../../assets/Frame 46.png";
import radio2 from "../../assets/Frame 46a.png";

function Faqs() {
  return (
    <div className="font-DMSans h-full pt-12">
      {/* nav */}
      <Navigation />
      {/* nav */}

      {/* title */}
      <h1 className="md:mt-44 mt-20 md:text-6xl font-bold text-center  md:mb-36">
        Frequently asked <span className="text-[#FBC108]">questions</span>
      </h1>

      {/* content */}

      <div className="md:ml-36 md:mt-16 mt-9 mx-10">
        <div>
          <div className="flex items-center gap-5 md:gap-12">
            <img src={radio} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className=" font-bold md:text-2xl text-base ">
                What does <span className="text-[#FBC108]">Tyrion</span> offer?
              </h1>
              <p className="md:mt-8 mt-5 text-sm text-[#00000063] mr-12 md:mr-700">
                We are a hybrid website that offers a secure e-commerce platform
                for purchasing online product & an exchange platform where you
                can exchange your gift cards or crypto asset for fiat
                currencies.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:gap-12 mt-6  md:mt-12">
            <img src={radio2} alt="" className="self-start  w-5 md:w-11" />
            <div>
              <h1 className=" font-bold md:text-2xl text-base">
                Which card can I sell to{" "}
                <span className="text-[#FBC108]">Tyrion Exchange</span>?
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-12 mt-6 md:mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-bold md:text-2xl text-base">
                How long does it take to{" "}
                <span className="text-[#FBC108]">receive payments</span> and
                products?
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-12 mt-6 md:mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-bold md:text-2xl text-base">
                Where can I make{" "}
                <span className="text-[#FBC108]">complaints</span> ?
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-12 mt-6 md:mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-bold md:text-2xl text-base">
                Can I sell my cryptocurrencies to{" "}
                <span className="text-[#FBC108]">Tyrion Exchange</span>?
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-12 mt-6 md:mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-bold md:text-2xl text-base">
                What Product can I buy on the Tyrion
                <span className="text-[#FBC108]"> e-commerce platform</span>?
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-12 mt-6 md:mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-bold md:text-2xl text-base">
                When can I <span className="text-[#FBC108]">trade </span>?
              </h1>
            </div>
          </div>
        </div>
        <h1 className="md:text-4xl mb-9 font-medium md:mt-36 mt-16">
          Create an account/login to get started
        </h1>
        <div className="flex md:gap-12 gap-6 md:mb-40 mb-20">
          <button className="md:w-[280px] w-[140px]  rounded-lg md:h-[79px] h-[40px] bg-[#FBC108] text-white text-sm font-medium md:text-xl hover:bg-[#FFCC00] active:bg-blue-200 ">
            Create an account
          </button>
          <button className="border border-yellow-500 border-2px md:w-52 w-24 h-[40px] md:h-[79px] rounded-lg md:text-xl font-medium  hover:bg-[#fbc108] hover:text-white hover:border-none active:bg-blue-200">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
