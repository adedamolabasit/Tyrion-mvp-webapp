import React from "react";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex bg-[#131313] text-white md:pt-[121px] p-5  md:pb-[43px] flex-col w-full">
      <div className="grid grid-cols-2 p-5 gap-16 md:flex md:flex-row md:gap-32 md:pl-40 ">
        <div className="flex flex-col gap-2 md:gap-6">
          <h4 className="font-bold text-lg">Business</h4>
          <h6
            className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]
              "
            onClick={() => navigate("/about")}
          >
            About us
          </h6>
          <h6
            className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/exchange")}
          >
            Exchange
          </h6>
          <h6
            className="text-sm text-[#ffffff60]  cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] "
            onClick={() => navigate("/rates")}
          >
            Rates
          </h6>
        </div>

        <div className="flex flex-col gap-2 md:gap-6">
          <h4 className="font-bold text-lg">Legal</h4>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Term of use
          </h6>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Privacy policy
          </h6>
        </div>

        <div className="flex flex-col gap-2 md:gap-6">
          <h4 className="font-bold text-lg">Product</h4>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Exchange
          </h6>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Cryptocurrency
          </h6>
        </div>

        <div className="flex flex-col gap-2 md:gap-6">
          <h4 className="font-bold text-lg">Support</h4>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Live chat
          </h6>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Help center
          </h6>
          <h6 className="text-sm text-[#ffffff60] cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Give feedback
          </h6>
        </div>

        <div className="flex flex-col  gap-2 md:gap-6">
          <h4 className="font-bold text-lg">Contact</h4>
          <h6 className="text-sm text-[#ffffff60]">+234 905 678 4456</h6>
          <h6 className="text-sm text-[#ffffff60]">hello@tyrionexchange</h6>
          <div className="flex gap-2 items-center">
            <img src={insta} alt="" className="w-4 h-4" />
            <img src={twitter} alt="" className="w-5 h-4" />
            <h6 className="text-sm text-[#ffffff60]">Tyrionexchange</h6>
          </div>
        </div>
      </div>
      <p className="md:mt-20 mt-12 md:self-center mx-auto">
        © 2021 — Tyrionexchange - All Rights Reserved
      </p>
    </footer>
  );
}
