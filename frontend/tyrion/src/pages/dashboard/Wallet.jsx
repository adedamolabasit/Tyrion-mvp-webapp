import React from "react";

function Wallet() {
  const walletObjects = [
    {
      id: 1,
      name: "Tyrion",
      price: "20,000 tyrion",
    },
    {
      id: 2,
      name: "ETH",
      price: "0.25 ETH",
    },
    {
      id: 3,
      name: "BTC",
      price: "0.3 BTC",
    },
    {
      id: 4,
      name: "USDT",
      price: "100 USDT",
    },
    {
      id: 4,
      name: "NEAR",
      price: "25 NEAR",
    },
  ];

  // create an empty array to store JSX elements
  const items = [];

  // loop through the walletObjects array
  for (const object of walletObjects) {
    // for each object, create a JSX element and add it to the items array
    items.push(
      <div className=" flex items-center " key={object.id}>
        <h5 className="font-medium text-xs md:text-2xl w-[33px] md:w-[200px] mr-[45px] md:mr-0  ">
          {object.name}
        </h5>
        <h6 className="text xs md:text-xl w-[120px]  md:w-[200px]">
          {object.price}
        </h6>
        <div className="flex gap-[43px] md:gap-[93px]">
          <button className="md:px-[15px] px-[5px] md:text-4xl bg-gradient-to-r from-[#FBC108] to-[#FFC406] text-white rounded-[4px] md:rounded-lg">
            +
          </button>
          <button className="md:px-[15px] px-[5px]  md:text-4xl bg-gradient-to-r from-[#FBC108] to-[#FFC406] text-white rounded-[4px] md:rounded-lg">
            -
          </button>
        </div>
      </div>
    );
  }

  // render the items array inside a parent div element
  return (
    <div className="md:px-[72px] ml-[18px]  py-[20px] md:py-[62px] flex flex-col gap-[50px] dark:bg-[#5A5A5A10] px-[33px]  mt-[16px] ">
      {items}
    </div>
  );
}

export default Wallet;
