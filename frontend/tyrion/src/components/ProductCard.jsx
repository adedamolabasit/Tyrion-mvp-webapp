import React from "react";
import MagicSliderDots from "react-magic-slider-dots";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import cart from "../assets/cart-btn.svg";
import ProductHeader from "./ProductHeader";
import Next from "../assets/Coins 1.png";

// import Slider from "react-slick";

function ProductCard({ products, color }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { onClick } = props;
    return <div onClick={onClick} className="next-arrow"></div>;
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return <div onClick={onClick} className="prev-arrow"></div>;
  }
  return (
    <div className="overflow-x-scroll w-[100%] h-[650px]">
      <div className="justify-center">
        <ProductHeader
          category="Sweat shirts"
          details="Protect your face from the direct ray of the sun with the tyrion face cap"
          path="/"
        />
      </div>
      
      <Slider {...settings}>
        {Object.keys(products).map((key) => {
          return products[key].map((items) => {
            return (
              <Link to={`/products/${items._id}`} onClick={scrollToTop}>
                <div
                  key={items._id}
                  className="flex justify-evenly items-end items-stretch "
                >
                  <div
                    key={items.key}
                    className={`flex flex-col md:w-[404px] w-[101px] bg-[#FDFCF2] py-5 overflow-y-none`}
                  >
                    <img
                      src={items.image}
                      alt={items.name}
                      width="210px"
                      height="10px"
                      className="self-center md:mb-[10px]"
                    />
                    <h5 className="self-center text-[6px] md:text-base font-medium md:mb-[10px]">
                      {items.name}
                    </h5>
                    <h5 className="self-center text-[#FFC700] text-[6px] md:text-base">
                      #{items.price}
                    </h5>
                    <button className="self-end mt-[10px]">
                      <img
                        src={cart}
                        alt={cart}
                        className="w-[11px] md:w-[44px] drop-shadow-2xl"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            );
          });
        })}
      </Slider>
    </div>
  );
}

export default ProductCard;
