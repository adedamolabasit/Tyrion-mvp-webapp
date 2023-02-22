import React from "react";
import CoinCard from "../../components/CoinCard";
import walletObjects from "../../data/walletdata";

function Wallet() {
  return (
    <div className="md:px-[72px] ml-[18px]  py-[20px] md:py-[62px] flex flex-col gap-[50px] dark:bg-[#5A5A5A10] px-[33px]  mt-[16px] ">
      {walletObjects.map((object) => {
        return (
          <CoinCard
            name={object.name}
            icon={object.icon}
            price={object.price}
            inDollar={object.inDollar}
          />
        );
      })}
    </div>
  );
}

export default Wallet;
