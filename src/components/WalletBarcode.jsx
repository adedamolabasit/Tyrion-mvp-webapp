import React from "react";
import Button from "./Button";
import copy from "../assets/copy.svg";
import QRCode from "qrcode.react";

function WalletBarcode() {
  const handleCopy = () => {
    navigator.clipboard.writeText("lolololo");
  };

  return (
    <div className="bg-[#EAEAEA] h-screen flex items-center justify-center ">
      <div className="md:pt-[44px] md:pb-[36px] flex flex-col items-center bg-white md:w-[481px] md:rounded-lg ">
        <h4 className="font-medium md:mb-[9px] ">Add tyrion token</h4>
        <div className="md:w-[262px] md:h-[256px] md:mb-[29px] ">
          <QRCode
            size={256}
            style={{ height: "100%", maxWidth: "100%", width: "100%" }}
            value={"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}
            viewBox={`0 0 256 256`}
          />
        </div>
        <button className="flex items-center md:mb-[35px] ">
          <small className="hover:underline">
            1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
          </small>
          <img src={copy} alt="" onClick={handleCopy} />
        </button>
        <Button
          bg={"bg-[#FBC108db]"}
          height={"md:h-[50px]"}
          width={"md:w-[180px] "}
          radius={"rounded-lg"}
          color={"text-white"}
        >
          Trade
        </Button>
      </div>
    </div>
  );
}

export default WalletBarcode;
