import React from "react";
import time from "../../assets/Vectorq.png";
import tyrion5 from "../../assets/Tyrion 5.png";
import tyrion9 from "../../assets/Tyrion9.svg";
import Navigation from "./Navigation";

function aboutUsPage() {
  return (
    <div className="font-DMSans overflow-x-hidden pt-12">
      {/* header */}
      <Navigation />
      {/* content */}
      <div className="flex flex-col md:flex-row mx-10 md:mx-20 mt-14 md:mt-28">
        <div>
          <h1 className="text-[#FBC108] font-bold text-3xl md:text-6xl mb-1 md:mb-2.5">
            About us
          </h1>
          <p className="md:text-xl mb-8 md:mb-16">
            We are committed to offering reliable, cutting-edge exchange
            services to all our clients worldwide who trust us enough to work
            with us.
          </p>

          <img src={tyrion9} alt="" className="md:hidden w-169 h-242 mx-auto" />

          <img src={time} alt="" className="mb-3 md:mb-6" />
          <p className="md:text-xl mb-8 md:mb-16">
            We are a renowned trading exchange that started as far back as 2019.
            During its establishment, Tyrion exchange has grown a network of
            foreign and local clients dedicated to our growth and progress as an
            exchange.
          </p>
          <p className="md:text-xl mb-8 md:mb-16">
            Having operational excellence has helped us as a brand build our
            worldwide network. Since we understand the unique advantages of the
            internet, we are taking our services forward by automating our
            payment process to improve our delivery time and provide instant
            payment for the values of your digital assets and gift cards.
          </p>
        </div>
        <img src={tyrion5} alt="" className="hidden md:block" />
      </div>
    </div>
  );
}

export default aboutUsPage;
