import React, { useState } from "react";
import logo from "../../assets/ttyrion.svg";
import cart from "../../assets/cartnew.svg";
import { useNavigate } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import closemodal from "../../assets/close-modal.svg";

function Ecomnav() {
  const navigate = useNavigate();
  // hamburger to open and close modal
  const [openModal, setOpenModal] = useState(false);

  function hamburgerr() {
    setOpenModal(true);
  }

  function closeHamburger() {
    setOpenModal(false);
  }

  return (
    <div>
      <div className=" flex items-center mx-[28px] md:mx-[81px] justify-between">
        <img src={logo} alt="logo" />
        <div className="flex items-center md:gap-[65px] md:flex hidden  ">
          <a
            href="/ecom"
            className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
          >
            Home
          </a>
          <a
            href="/product"
            className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
          >
            Product
          </a>
          <a
            href="/wallet"
            className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
          >
            Connect wallet
          </a>
        </div>
        <div className="md:flex hidden items-center gap-[44px]  ">
          <button>
            <img src={cart} alt="" onClick={() => navigate("/cart")} />
          </button>
          <button className="w-[169px] h-[60px] bg-[#FBC108] rounded-lg text-white font-medium text-sm hover:bg-[#FFCC00]">
            Profile
          </button>
        </div>
        <img
          src={hamburger}
          alt=""
          className="md:hidden"
          onClick={hamburgerr}
        />
      </div>

      {/* open hamburger menu */}
      {openModal && (
        <div className="flex flex-col bg-white px-[20px] py-[30px] absolute top-0 w-full md:hidden ">
          <img
            src={closemodal}
            alt=""
            className="w-[16px]  self-end "
            onClick={closeHamburger}
          />
          <ul className="flex flex-col gap-[24px]  ">
            <li>
              <a
                href="/home"
                className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/categories"
                className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="/wallet"
                className="hover:text-[#fbc108] active:text-[#fbc108] focus:text-[#fbc108]"
              >
                Connect wallet
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Ecomnav;
