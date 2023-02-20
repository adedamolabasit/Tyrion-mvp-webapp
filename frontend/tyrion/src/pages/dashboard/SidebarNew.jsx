import React from "react";
import logo2 from "../../assets/logo-black.svg";
import { useNavigate } from "react-router-dom";
import home from "../../assets/home.svg";
import wallet from "../../assets/wallet.svg";
import trade from "../../assets/trade.svg";
import transaction from "../../assets/transaction.svg";
import logout from "../../assets/logout.svg";
import contact from "../../assets/contact.svg";
import drag from "../../assets/drag.svg";

function SidebarNew() {
  const navigate = useNavigate();
  //   //   implementing dark-mode
  //   const [darkMode, setDarkMode] = useState(true);

  //   const backgroundColor = darkMode ? "#181818" : "";

  //   console.log(backgroundColor);

  //   setDarkMode((darkMode) => !darkMode);
  // dark:bg-[#181818]

  return (
    <div className="flex flex-col md:w-[400px] w-[237px] md:flex hidden  pl-[53px] pt-[53px]  ">
      <img
        src={logo2}
        alt=""
        className="  w-[71px] md:w-[128px] h-[28px] md:h-[51px] md:mb-[85px] "
      />
      <button className="mb-[78px] md:mb-[97px] self-end md:hidden">
        <img src={drag} alt="" className="" />
      </button>
      <div className=" flex flex-col gap-[10px] md:gap-[15px] h-screen ">
        <div
          className="flex items-center hover:border-l-[#FBC108] hover:border-l-[11px]  focus:border-l-[11px] focus:border-l-[#FBC108] pl-[18px] hover:bg-[#ffffff70] py-[13px] md:w-[230px]   "
          onClick={() => navigate("/dashboard")}
        >
          <img src={home} alt="" className="" />
          <h6 className="md:text-xl text-xs">Home</h6>
        </div>

        <div
          className="flex items-center hover:border-l-[#FBC108] hover:border-l-[11px]  focus:border-l-[11px] focus:border-l-[#FBC108] pl-[18px] hover:bg-[#ffffff70] py-[13px] md:w-[230px]   "
          onClick={() => navigate("/wallet")}
        >
          <img src={wallet} alt="" className="" />
          <h6 className="md:text-xl text-xs">Wallet</h6>
        </div>

        <div
          className="flex items-center hover:border-l-[#FBC108] hover:border-l-[11px] focus:border-l-[11px] focus:border-l-[#FBC108] pl-[18px] hover:bg-[#ffffff70] py-[13px] md:w-[230px]  "
          onClick={() => navigate("/trading")}
        >
          <img src={trade} alt="" />
          <h6 className="md:text-xl text-xs">Trade assets</h6>
        </div>

        <div
          className="flex items-center hover:border-l-[#FBC108] hover:border-l-[11px] focus:border-l-[11px] focus:border-l-[#FBC108] pl-[18px] hover:bg-[#ffffff70] py-[13px] md:w-[230px]  "
          onClick={() => navigate("/transactions")}
        >
          <img src={transaction} alt="" />
          <h6 className="md:text-xl text-xs">Transaction</h6>
        </div>

        <div
          className="flex items-center hover:border-l-[#FBC108] hover:border-l-[11px] focus:border-l-[11px] focus:border-l-[#FBC108] pl-[18px] hover:bg-[#ffffff70] py-[13px] md:w-[230px] "
          onClick={() => navigate("/contact")}
        >
          <img src={contact} alt="" />
          <h6 className="md:text-xl text-xs">Contact us</h6>
        </div>
        <div
          className="flex items-center hover:border-l-[#FBC108] hover:border-l-[11px] focus:border-l-[11px] focus:border-l-[#FBC108] pl-[18px] hover:bg-[#ffffff70] py-[13px] md:w-[230px] "
          onClick={() => navigate("/logout")}
        >
          <img src={logout} alt="" className="hover:ml-[18px]" />
          <h6 className="md:text-xl text-xs">Log out</h6>
        </div>
      </div>
    </div>
  );
}

export default SidebarNew;
