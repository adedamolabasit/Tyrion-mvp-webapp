import React from "react";
import tyrion3 from "../../assets/Tyrion 3a.png";
import tyrion4 from "../../assets/Tyrion 4.png";
import group45 from "../../assets/Group 45.svg";
import tyrion10 from "../../assets/Tyrion10.svg";
import coins1 from "../../assets/Coins 1.png";
import reliable from "../../assets/Reliable.png";
import security from "../../assets/Security.png";
import fast from "../../assets/Fast.png";
import radio from "../../assets/Frame 46.png";
import radio2 from "../../assets/Frame 46a.png";
import image2 from "../../assets/Group 2.png";
import ellipse from "../../assets/Ellipse 3.png";
import polygon from "../../assets/Polygon 1.png";
import vector1 from "../../assets/Vector 1.png";
import vector11 from "../../assets/Vector11.svg";
import vector12 from "../../assets/Vector12.svg";
import vector13 from "../../assets/Vector13.svg";
import vectora from "../../assets/Vector 1.svg";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import InfoStepper from "../../components/InfoStepper";



// import { motion } from "framer-motion";

function LandingPage(props) {
  const navigate = useNavigate();
 
 
 



  return (
    <div className="font-DMSans">
      {/* section 1 */}
      <div className=" landing-bg bg-gradient-to-br from-[#e2cc06]  via-black  to-gray-300 pt-12 md:relative">
        {/* navigation */}
        <Navigation />
        {/* hero */}
        <div className="md:ml-90 md:mt-20 mt-6 md:flex ml-9">
          <div>
            <h1 className="font-bold md:text-6xl text-2xl md:mt-20 mt-6 text-white relative z-10 ">
              Shop for E-commerce
              <br />
              products & Swap Your
              <br /> Gift Cards & Digital
              <br /> Assets
            </h1>
            <h4 className="text-white mt-2 font-medium text-sm md:text-2xl md:mb-90 mb-5">
              For Naira Securely In Lesser Time
            </h4>
            <div className="flex gap-9 mb-10">
              <button
                className="bg-[#FBC108] md:w-44 w-28 md:h-16 h-9 px-2.5 py-2 text-sm  text-white rounded-lg nd:font-medium md:text-lg  hover:bg-[#FFCC00] active:bg-[#FBC10886]"
                onClick={() => navigate("/ecom")}
              >
                Shop now
              </button>
              <button
                className="border-solid border-2 border-[#FBC108]  md:w-44 w-28 md:h-16 h-9 px-2.5 py-2 text-sm  text-white rounded-lg md:font-medium md:text-lg hover:bg-[#fbc108] hover:text-white hover:border-none active:bg-[#FBC10886]"
                onClick={() => navigate("/rates")}
              >
                Start Trading
              </button>
            </div>
          </div>
          <img
            src={tyrion3}
            alt=""
            className="relative z-10 w-80 md:w-auto mx-auto"
          />
        </div>

        <div className="md:hidden">
          <img src={vectora} alt="" className="absolute top-40 left-20 z-0" />
        </div>
        <div className="md:block hidden">
          <img
            src={coins1}
            alt=""
            className="md:absolute top-530 left-[730px] z-0"
          />
          <img
            src={ellipse}
            alt=""
            className="md:absolute top-[350px] left-[1200px] z-0"
          />
          <img
            src={polygon}
            alt=""
            className="md:absolute top-700 left-580 z-0"
          />
          <img
            src={vector1}
            alt=""
            className="md:absolute top-[370px] left-[235px] z-0"
          />
        </div>
      </div>
      {/* hero section */}

      {/* section 2 */}
      <div className="md:flex md:justify-center gap-36 mx-7 md:mx-32 mt-20 mb-">
        <div className="flex flex-col items-center mb-16">
          <img src={reliable} alt="" className="w-24 mb-8" />
          <h3 className="font-medium text-center text-2xl mb-6">Reliable</h3>
          <p className="font-base text-[#00000066] text-center">
            Tyrion offers a user-friendly interface & also provide
            round-the-clock customer service and support.
          </p>
        </div>

        <div className="flex flex-col items-center mb-16">
          <img src={security} alt="" className="w-24 mb-6 " />
          <h3 className="font-medium text-center text-2xl mb-6">Secure</h3>
          <p className="font-base text-[#00000066] text-center">
            Tyrion is an insured exchange platform that helps you protect your
            information and earnings.
          </p>
        </div>

        <div className="flex flex-col items-center mb-11">
          <img src={fast} alt="" className="w-24 mb-6" />
          <h3 className="font-medium text-center text-2xl mb-6">Swift</h3>
          <p className="font-base text-[#00000066] text-center">
            With an automated payment service, we provide instant funding for
            the value of your digital currencies and gift cards.
          </p>
        </div>
      </div>

      {/* subsection */}
      <h1 className=" text-lg font-bold text-center mmt-10 md:mt-20 md:text-5xl">
        A <span className="text-[#FBC108DC]">Web 3.0 </span>Online E-commerce
        <br /> Shop and Digital Exchanger
      </h1>
      <p className="text-sm mt-4 md:mt-14 text-center md:text-lg mx-8 md:mx-40 text-[#00000066]">
        We are 3 years of experienced & registered exchange providing a secure
        payment front for all online purchases of e-commerce products. We are
        one of the first web 3.0 e-commerce websites offering a cryptocurrency
        payment method for purchasing e-commerce goods.
      </p>
      <p className="mt-6 text-lg text-center">
        We offer a hybrid platform where you can:
      </p>

      <div className="md:hidden">
        <h1 className="md:mt-24 mt-11 text-xl font-bold text-center md:text-5xl mx-2 md:mx-16">
          Trade your Gifts cards & crypto
          <br />
          currency in 5 Simple Steps
        </h1>
        <img
          src={vector11}
          alt=""
          className="relative left-44 md:-top-2 md:z-0"
        />
      </div>
      <div className="hidden md:block relative">
        <h1 className="md:mt-24 mt-11 text-xl font-bold text-center md:text-5xl mx-2 md:mx-16 relative z-10">
          Trade your Gifts cards & cryptocurrency <br />
          in 5 Simple Steps
        </h1>
        <img
          src={vector1}
          alt=""
          className="md:absolute md:left-480 top-11 md:z-5"
        />
      </div>

      {/* content 1 */}
      <div className="mx-[150px] my-[50px]">
      <InfoStepper cardOn={'home1'} sideImage={tyrion4} />

      </div>
     

      {/* content 1 ends */}

      {/* section 3 */}
      <div className="mt-10 md:mt-32 py-10 md:mb-60  bg-[#FFFBEE]  ">
        <video controls className="md:w-944 w-72 md:h-455 h-36 mx-auto">
          <source src="" />
        </video>
      </div>

      <div className="md:mt-24 mt-11">
        <div className="md:hidden">
          {" "}
          <h1 className=" text-2xl font-bold text-center md:text-6xl">
            Shop for E-commerce
            <br /> products in 4 Simple Steps
          </h1>
          <img
            src={vector12}
            alt=""
            className="relative left-32 md:-top-2 md:z-0"
          />
        </div>
        <div className="hidden md:block relative">
          {" "}
          <h1 className=" text-2xl font-bold text-center md:text-6xl relative z-10">
            Shop for E-commerce products
            <br /> in 4 Simple Steps
          </h1>
          <img
            src={vector13}
            alt=""
            className="relative left-[480px] -top-20 z-0"
          />
        </div>
      </div>

      {/* content 2 */}
      <div className="mx-[200px] my-[50px]">
      <InfoStepper cardOn={'home2'} sideImage={group45} />

      </div>
      {/* content 2 ends */}

      {/* section 4 */}
      <div className="md:relative mb-8 md:mb-16mt-8  md:mt-16 mx-16 md:mx-auto">
        <img src={image2} alt="" className="hidden md:block" />
        <div className="md:absolute md:top-28 md:left-600 mx:auto">
          <h1 className="font-bold text-3xl md:text-6xl">
            Want to rep a<br />
            <span className="text-[#FBC108]">reputable</span> brand?
          </h1>
          <p className="md:mt-6 mt-2.5 md:text-xl font-medium md:mb-14 text-sm text-[#00000068]">
            Our Tyrion branded merches are available for
            <br /> sale at affordable prices.
          </p>
          <button className="md:w-44  w-36 md:h-16 h-11 px-2.5 py-2 text-sm  mt-6  bg-black rounded-lg text-white cursor-pointer hover:bg-[#00000086] active:bg-[#00000070]">
            Shop now
          </button>
          <img src={tyrion10} alt="" className="md:hidden mt-6 mx-auto" />
        </div>
      </div>

      {/* section 5 */}
      <div className="md:mx-52 mx-8">
        <h1 className="font-bold text-2xl md:text-4xl mb-3.5">
          Subscribe to our newsletter
        </h1>
        <p className="text-base font-medium text-[#00000063]">
          Stay ahead of crypto news and get exciting new updates from us
        </p>
        <form className="flex flex-col  md:flex-row gap-5 md:gap-9 mt-3.5 md:mt-7 md:mb-16 mb-8 ">
          <input
            type="text"
            placeholder="Name"
            className="border border-2px border-gray-300 rounded-lg w-80 text-sm md:text-base md:w-410 md:h-16 h-11  pl-3"
          />

          <input
            type="email"
            placeholder="Email address"
            className="border border-2px border-gray-300 rounded-lg md:w-410 w-80 text-sm md:text-base  md:h-16 h-11 pl-3"
          />

          <button
            type="submit"
            className="w-28 md:w-44 h-11 md:h-16 bg-[#FBC108] rounded-lg text-white text-sm md:text-base hover:bg-[#FFCC00] active-bg-[#fbc10886]"
          >
            Subscribe
          </button>
        </form>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
