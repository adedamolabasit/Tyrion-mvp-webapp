import React from "react";
import deposit from "../../assets/deposit.svg";
import withdraw from "../../assets/withdraw.svg";
import swap from "../../assets/swappp.svg";
import chart from "../../assets/Chart.svg";
import Button from "../../components/Button";

function DashHome() {
  return (
    // container
    <div className="container md:w-[1080px] md:mt-[-50px] md:pt-[59px] md:pl-[90px] md:pr-[71px] bg-[#FCFCF6] ">
      <select
        name=""
        id=""
        className="md:w-[440px]  text-[#0000004d] border border-[#0000004d] md:rounded-lg md:mb-[16px] md:py-[22px] md:px-[28px] "
      >
        <option value="">Choose currency</option>
        <option value="">Naira</option>
        <option value="">Dollar</option>
        <option value="">Pound</option>
      </select>
      {/* top item */}
      <div className="bg-[#5D5B5B] text-white md:pt-[21px] pt-[15px] md:pl-[33px] md:pr-[32px] pl-[30px] md:pb-[17px] pb-[17px] rounded-lg w-[328px]  md:w-[440px] md:mx-0 mx-auto md:mb-[46px] mb-[16px] ">
        <div className="flex items-center justify-between">
          <h4 className="md:text-2xl text-sm">NGN</h4>
          <h4 className="">$2000</h4>
        </div>

        <h5 className="font-bold md:text-5xl text-3xl md:mb-[20px] ">
          N234,500
        </h5>

        <div className="flex items-center md:gap-[20px] ">
          <Button
            bg={"bg-[#FBC108db]"}
            height={"md:h-[40px]"}
            width={"md:w-[119px] "}
            radius={"rounded-lg"}
            color={"text-white"}
            className="flex items-center justify-center "
          >
            <div className="flex items-center justify-center gap-2">
              <img src={deposit} alt="" />
              <span className="md:text-base text-[8px]">Deposit</span>
            </div>
          </Button>
          <Button
            bg={"bg-[#FBC108db]"}
            height={"md:h-[40px]"}
            width={"md:w-[119px] "}
            radius={"rounded-lg"}
            color={"text-white"}
            className="flex items-center justify-center "
          >
            <div className="flex items-center justify-center gap-2">
              <img src={withdraw} alt="" />
              <span className="md:text-base text-[8px]">Withdraw</span>
            </div>
          </Button>
        </div>
      </div>
      {/* bottom flex */}
      <div className="flex md:gap-[27px] gap-[16px] flex-col md:flex-row md:mb-[102px] mb-[30px] ">
        {/* left */}
        <div className="bg-[#5D5B5B] text-white md:pt-[21px] pt-[15px] md:pl-[33px] md:pr-[32px] pl-[30px] md:pb-[17px] pb-[17px] rounded-lg w-[328px]  md:w-[440px] md:mx-0 mx-auto md:mb-[46px] mb-[16px] ">
          <div className="flex items-center justify-between">
            <h4 className="md:text-2xl text-sm">TYR</h4>
            <h4 className="">$2000</h4>
          </div>

          <h5 className="font-bold md:text-5xl text-3xl md:mb-[20px] ">
            54,000 TYR
          </h5>

          <div className="flex items-center md:gap-[20px] ">
            <Button
              bg={"bg-[#FBC108db]"}
              height={"md:h-[40px]"}
              width={"md:w-[98px] "}
              radius={"rounded-lg"}
              color={"text-white"}
              className="flex items-center justify-center "
            >
              <div className="flex items-center justify-center gap-2">
                <img src={swap} alt="" />
                <span className="md:text-base text-[8px]">Swap</span>
              </div>
            </Button>
            <Button
              bg={"bg-[#FBC108db]"}
              height={"md:h-[40px]"}
              width={"md:w-[119px] "}
              radius={"rounded-lg"}
              color={"text-white"}
              className="flex items-center justify-center "
            >
              <div className="flex items-center justify-center gap-2">
                <img src={deposit} alt="" />
                <span className="md:text-base text-[8px]">Deposit</span>
              </div>
            </Button>
            <Button
              bg={"bg-[#FBC108db]"}
              height={"md:h-[40px]"}
              width={"md:w-[119px] "}
              radius={"rounded-lg"}
              color={"text-white"}
              className="flex items-center justify-center "
            >
              <div className="flex items-center justify-center gap-2">
                <img src={withdraw} alt="" />
                <span className="md:text-base text-[8px]">Withdraw</span>
              </div>
            </Button>
          </div>
        </div>
        {/* right */}
        <div className="relative">
          <select
            name=""
            id=""
            className="md:w-[440px]  text-[#0000004d] border border-[#0000004d] md:rounded-lg md:mb-[16px] md:py-[22px] md:px-[28px] absolute -top-[100px] right-0 "
          >
            <option value="">Choose assets</option>
            <option value="">TYR</option>
            <option value="">BTC</option>
            <option value="">NEAR</option>
          </select>
          <div className="bg-[#5D5B5B] text-white md:pt-[21px] pt-[15px] md:pl-[33px] md:pr-[32px] pl-[30px] md:pb-[17px] pb-[17px] rounded-lg w-[328px]  md:w-[440px] md:mx-0 mx-auto md:mb-[46px] mb-[16px] ">
            <div className="flex items-center justify-between">
              <h4 className="md:text-2xl text-sm">NEAR</h4>
              <h4 className="">$2000</h4>
            </div>

            <h5 className="font-bold md:text-5xl text-3xl md:mb-[20px] ">
              878 NEAR
            </h5>

            <div className="flex items-center md:gap-[20px] ">
              <Button
                bg={"bg-[#FBC108db]"}
                height={"md:h-[40px]"}
                width={"md:w-[98px] "}
                radius={"rounded-lg"}
                color={"text-white"}
                className="flex items-center justify-center "
              >
                <div className="flex items-center justify-center gap-2">
                  <img src={swap} alt="" />
                  <span className="md:text-base text-[8px]">Swap</span>
                </div>
              </Button>
              <Button
                bg={"bg-[#FBC108db]"}
                height={"md:h-[40px]"}
                width={"md:w-[119px] "}
                radius={"rounded-lg"}
                color={"text-white"}
                className="flex items-center justify-center "
              >
                <div className="flex items-center justify-center gap-2">
                  <img src={deposit} alt="" />
                  <span className="md:text-base text-[8px]">Deposit</span>
                </div>
              </Button>
              <Button
                bg={"bg-[#FBC108db]"}
                height={"md:h-[40px]"}
                width={"md:w-[119px] "}
                radius={"rounded-lg"}
                color={"text-white"}
                className="flex items-center justify-center "
              >
                <div className="flex items-center justify-center gap-2">
                  <img src={withdraw} alt="" />
                  <span className="md:text-base text-[8px]">Withdraw</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* chart */}
      {/* I'LL WORK ON THIS CHART LATER */}
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

// ALSO TO DO : FIX RESPONSIVENESS FOR ALL DASHBOARD PAGES
