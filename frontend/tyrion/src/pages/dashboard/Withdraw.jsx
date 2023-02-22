import React from "react";
import Button from "../../components/Button";

function Withdraw() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#EAEAEA] ">
      <div className="md:px-[93px] md:pt-[45px] md:pb-[25px] flex flex-col  md:w-[615px] bg-white rounded-lg">
        <h1 className="text-[#FFC700] md:text-4xl font-bold  ">Send USDT</h1>
        <p className="text-[#434343b1] md:text-small md:mb-[44px] ">
          Send assets to crypto address
        </p>
        <form action="">
          <div className="md:mb-[30px] ">
            <label
              htmlFor=""
              className="text-[#3D3D3D] md:text-sm md:mb-[8px] "
            >
              Wallet address
            </label>
            <input
              type="text"
              placeholder="Paste wallet address"
              className="md:w-[428px] md:h-[60px]  border border-[#00000041] md:rounded-lg md:py-[21px] md:px-[34px]"
            />
          </div>
          <div className="md:mb-[30px] ">
            <label
              htmlFor=""
              className="text-[#3D3D3D] md:text-sm md:mb-[8px] "
            >
              Network
            </label>
            <input
              type="text"
              placeholder="Network"
              className="md:w-[428px] md:h-[60px]  border border-[#00000041] md:rounded-lg md:py-[21px] md:px-[34px]"
            />
          </div>
          <div className="md:mb-[21px] ">
            <label
              htmlFor=""
              className="text-[#3D3D3D] md:text-sm md:mb-[8px] "
            >
              Amount
            </label>
            <input
              type="number"
              placeholder="Type amount"
              className="md:w-[428px] md:h-[60px]  border border-[#00000041] md:rounded-lg md:py-[21px] md:px-[34px]"
            />
          </div>
          <div className="flex items-end flex-col">
            <h6 className="font-bold">Balance: 20 NEAR</h6>
            <small className="text-[#8D8D8D] ">$340.00</small>
          </div>
          <div className="flex justify-center">
            <Button
              bg={"bg-[#FBC108db]"}
              height={"md:h-[60px]"}
              width={"md:w-[250px] "}
              radius={"rounded-lg"}
              color={"text-white"}
            >
              Withdraw
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Withdraw;
