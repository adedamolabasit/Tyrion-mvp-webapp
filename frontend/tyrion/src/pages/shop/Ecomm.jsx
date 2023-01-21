import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../store/actions/productActions";

import frame126 from "../../assets/frame126.svg";
import ecom from "../../assets/ecom.svg";
import frame127 from "../../assets/Frame127.svg";
import frame129 from "../../assets/Frame129.svg";
import frame130 from "../../assets/Frame130.svg";
import frame131 from "../../assets/Frame131.svg";
import tyrion1 from "../../assets/tyrion1.svg";
import cart from "../../assets/cart-btn.svg";
import arrow from "../../assets/arrow.svg";
import hoodie from "../../assets/Hoodie.svg";
import hoodie2 from "../../assets/Hoodie2.svg";
import tyrion4 from "../../assets/Tyrion23.png";


import ProductCard from "../../components/ProductCard";
import InfoStepper from "../../components/InfoStepper";

function Ecomm() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state?.productList);

  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="mx-[28px] md:mx-[81px]">
      {/* section 1 */}
      <div className="flex justify-between mt-[28px] md:mt-[72px]  bg-[#F8F8F8] md:gap:[78px] md:mb-[80px] mb-[20px] pl-[24px] md:pl-[70px] pt-[48px] rounded-lg pr-[32px] ">
        <div className="container mx-auto">
          <h1 className="font-bold text-lg md:text-7xl mb-[20px]">
            Want to rock the <br />
            <span className="text-[#FBC108]">tyrion </span>
            branded
            <br /> product
          </h1>
          <p className="md:mb-[28px] mb-[15px] text-xs md:text-2xl opacity-[0.6]">
            Check out our cool
            <br className="md:hidden" /> merches
          </p>
          <button className="md:w-[210px] w-[90px] h-[26px] md:h-[70px] bg-[#000000] opacity-[0.8] text-xs md:text-base text-white rounded-lg">
            Shop now
          </button>
        </div>
        <img
          src={ecom}
          alt=""
          className="w-[150px] md:w-[384px] md:h-[461px] h-[223px] "
        />
      </div>

      <div>
        {/* first carousel */}
        <ProductCard products={products} />
        {/*  */}
        {/* second carousel */}
        <ProductCard products={products}/>
      </div>

      {/* trending products */}
      <div className="md:w-[1207px] w-[326px] mb-[98px] md:mb-[179px] md:pt-[79px] pt-[19px] pl-[26px] md:pl-[104px] bg-[#1E1E1E] justify-between text-white rounded-lg flex mx-auto ">
        <div className="flex gap-[7px] md:gap-[25px] flex-col">
          <h1 className="font-bold md:text-6xl">
            <span className="text-[#FBC10886]  ">Trending</span>
            <br />
            Products
          </h1>
          <p className="text-[#E7E7E7] md:text-xl text-[5px]">
            What do you stand for? We have a product for
            <br /> every version you are.
          </p>
          <button className="md:w-[201px] w-[50px] h-[17px] md:h-[70px] bg-[#fcb108] rounded-lg md:text-base text-[5px]">
            Shop now
          </button>
        </div>
        <img
          src={tyrion1}
          alt=""
          className="w-[100px] md:w-[401px] md:h-full h-[142px] "
        />
      </div>

      {/* third carousel */}
      <ProductCard products={products} />

      {/* section 5 */}
      <div className="mx-[50px] my-[50px]">
      <InfoStepper cardOn={'shop1'} sideImage={tyrion4}/>
      </div>
        {/* third carousel */}
        <ProductCard products={products} />
      </div>
  );
}

export default Ecomm;
