import React, { useState } from "react";
import { useEffect } from "react";
import radio from "../assets/Frame 46.png";
import radio2 from "../assets/Frame 46a.png";
import tyrion4 from "../assets/Tyrion23.png";

const information = {
  shop1: [
    {
      id: 1,
      state: true,
      heading: " 2Create/Verify your account",
      detail:
        "2We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
    {
      id: 2,
      state: false,
      heading: " Create Verify your account",
      detail:
        "We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
    {
      id: 3,
      state: false,
      heading: " Create kVerify your account",
      detail:
        "We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
  ],
  home1: [
    {
      id: 1,
      state: true,
      heading: " 43rrCreate/Verify your account",
      detail:
        "2We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
    {
      id: 2,
      state: false,
      heading: " Create eVerify your account",
      detail:
        "We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
    {
      id: 3,
      state: false,
      heading: " Create kVerify your account",
      detail:
        "We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
  ],
  home2: [
    {
      id: 1,
      state: true,
      heading: " 2Create/Verify your account",
      detail:
        "2We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
    {
      id: 2,
      state: false,
      heading: " Create eVerify your account",
      detail:
        "We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
    {
      id: 3,
      state: false,
      heading: " Create kVerify your account",
      detail:
        "We are known for our unique expertise in gift card exchange to naira. We have been in existence since 2017 trading gift cards and cryptocurrencies offering amazing services tocustomers in Nigeria and beyond.",
    },
  ],
};
function InfoStepper({ cardOn, sideImage }) {
  useEffect(() => {
    const info = localStorage.getItem("informationCard")
      ? JSON.parse(localStorage.getItem("information"))
      : [];
  });

  const [informationCard, setInformationCard] = useState(information);
  const handleInformationCard = (id) => {
    setInformationCard((prevState) => {
      const updatedCard = prevState[cardOn].map((item) => {
        if (item.id === id) {
          item.state = !item.state;
        } else {
          item.state = false;
        }
        return item;
      });
      return { ...prevState, cardOn: updatedCard };
    });
  };

  return (
    <div className="flex justify-between gap-[200px] items-center">
      <div className="md:flex md:mt-16 mt-9">
        <div>
          <div className="flex flex-col items-center">
            {informationCard[cardOn].map((info) => {
              return (
                <div
                  key={info.id}
                  className="flex justify-between items-center gap-12"
                >
                  <div className="self-start">
                    <button
                      className="w-[30px]"
                      onClick={() => handleInformationCard(info.id)}
                    >
                      <img
                        src={info.state ? radio : radio2}
                        alt=""
                        width="50px"
                        className="self-start w-5 md:w-11 "
                      />
                    </button>
                  </div>
                  <div className="items-center min-w-[700px]">
                    <h1
                      className={`font-lg font-bold md:text-2xl text-base  pb-4 ${
                        info.state ? "text-[#FBC108DC]" : "text-black"
                      }`}
                    >
                      {info.heading}
                    </h1>
                    <p
                      className={`${
                        info.state ? "block" : "hidden"
                      } md:mt-8 mt-5 text-[#00000063] mr-12 min-h-[15px] `}
                    >
                      {info.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <img
          src={sideImage}
          alt=""
          className="w-[154px] h-[237px] md:w-auto md:h-auto mt-10 mx-auto"
        />
      </div>
    </div>
  );
}

export default InfoStepper;
