import React, { useState } from "react";
import profile from "../../assets/profile.svg";
import profile2 from "../../assets/profile2.svg";

function Trading() {
  const [switchButton, setSwitchButton] = useState(false);

  // const handleSwitch = () => {
  //   setSwitchButton(prevSwitch) => !prevSwitch
  // };

  const transactionDetails = [
    {
      id: 1,
      username: "Cinamon 2356",
      image: profile,
      status: "offline",
      card: "Amazon card",
      payment: "Bank transfer",
      price: "$52,389 USD",
      discount: "20% discount",
      range: "$20-$500",
    },
    {
      id: 2,
      username: "Thechemdesigner",
      image: profile2,
      status: "online",
      card: "Amazon card",
      payment: "Bank transfer",
      price: "$20,609 USD",
      discount: "2% discount",
      range: "$300-$3000",
    },
    {
      id: 3,
      username: "Cinamon 2356",
      image: profile,
      status: "offline",
      card: "Amazon card",
      payment: "Bank transfer",
      price: "$52,389 USD",
      discount: "20% discount",
      range: "$900-$2000",
    },
  ];

  return (
    <div className="md:mt-[-80px] mt-[0] md:pr-[70px] w-[76%]">
      {/* i used w-70% to fit whats on figma for now because of the width of the component exceeds the screen, i'll find ways to rectify this later */}
      {/* upper flex */}
      <div className=" md:mb-[101px] mb-[30px] text-xs md:text-xl ">
        <div className="">
          <h2 className=" font-medium text-[#FBC108DC]">Tyrion balance:</h2>
          <p className="font-bold "> 24,800 token</p>
        </div>
      </div>

      {/* bottom flex, flex col small screen */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:mb-[21px] md:mt-[-50px] mx-[54px] md:ml-0 ">
        {/* upper left flex */}
        <div>
          <div className="md:mb-[81px]">
            <button
              className="ml-[35px] bg-[#FBC108DC] w-[83px] md:w-[158px] h-[27px] md:h-[56px] text-white rounded-[4px] md:rounded-lg text-xs md:text-base "
              // onClick={handleSwitch}
            >
              Buy Tyrion
            </button>
            <button
              className="border-[#FBC108DC] ml-[-5px] md:ml-[-10px] border-[1px] border-solid w-[83px] md:w-[158px] h-[27px] md:h-[56px] rounded-[4px] md:rounded-lg text-xs md:text-base "
              // onClick={handleSwitch}
            >
              Sell Tyrion
            </button>
          </div>
          <div className="flex gap-[70px] items-center text-lg ">
            <div className="flex gap-[10px] items-center">
              <input type="radio" name="transaction" className="  " />
              <label htmlFor="">Gift card</label>
            </div>
            <div className="flex gap-[10px] items-center">
              <input type="radio" name="transaction" className="" />
              <label htmlFor="">Other assets</label>
            </div>
          </div>
        </div>
        {/* upper right flex */}
        <div className="flex flex-col mb-[39px] md:mb-0 justify-self-end">
          <div className="justify-self-end  ">
            <h3 className="md:text-2xl text-sm mb-[20px] md:mb-[26px]">
              Conversion of Naira to Tyrion
            </h3>
          </div>

          <form
            action=""
            className="flex flex-col md:mb-[31px] mb-[17px] text-[10px] md:text-base "
          >
            <label htmlFor="" className="text-[#00000060]">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter amount (N) "
              className="md:pl-[12px] pl-[6px] py-[8px] md:py-[15px] w-[70%] md:w-full"
            />
          </form>
          <div className="flex flex-col">
            <p className="border-b border-[#FBC108DC] md:border-b-[3px] mb-[8px] md:mb-[15px] text-[10px] md:text-base ">
              Equivalent tyrion amount
            </p>
            <h6 className="font-bold md:text-xl text-sm self-end">
              24,800 token
            </h6>
          </div>
        </div>
      </div>
      {/* lower flex */}
      <div>
        {/* select card type- no content */}
        <div className=""></div>
        <h6 className="mb-[30px] ">Offers available</h6>

        {transactionDetails.map((transaction) => (
          <div className="flex items-center justify-between mb-[77px]">
            <div className="flex flex-col w-[200px]  ">
              <div className="flex">
                <img
                  src={transaction.image}
                  alt=""
                  className="rounded-full mr-[10px] "
                />
                <div>
                  <h4 className="text-[#00000070] ">{transaction.username}</h4>
                  <h6 className="text-lg">{transaction.card}</h6>
                </div>
              </div>
              {transaction.status === "offline" && (
                <p className="text-[#00000040] ">3 hours ago</p>
              )}

              {transaction.status === "online" && (
                <div className="flex items-center gap-[4px] ">
                  <div className="bg-[#FBC108DC] w-[8px] h-[8px] rounded-full"></div>
                  <p className="text-[#00000040] ">Online</p>
                </div>
              )}
            </div>
            <div className="w-[200px] ">
              <h4>{transaction.payment}</h4>
            </div>
            <div className="w-[200px] ">
              <h4 className="text-lg font-medium">{transaction.price}</h4>
              <h6 className="text-[#00000060]">{transaction.discount}</h6>
            </div>
            <div>
              <h6 className="text-[#0000005e] ">Range:</h6>
              <small className="font-bold">{transaction.range}</small>
            </div>
            <button className="w-[108px] h-[38px] bg-[#FBC108DC] rounded-lg text-white ">
              Buy Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trading;
