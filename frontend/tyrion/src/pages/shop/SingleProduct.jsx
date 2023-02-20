import { React, useState,useEffect,useRef } from "react";
import { useNavigate,useParams} from "react-router-dom";
import tyrion1 from "../../assets/tttyrion.svg";
import tyrion2 from "../../assets/tttrion.svg";
import frame126 from "../../assets/frame126.svg";
import frame127 from "../../assets/Frame127.svg";
import cart from "../../assets/cart-btn.svg";
import { useDispatch, useSelector } from 'react-redux'
import { productDetails } from "../../store/actions/productActions";

function SingleProduct() {
  const params = useParams()


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const productDetailsData = useSelector(state => state?.productListDetail)

  const {product,loading,error} = productDetailsData


  useEffect(()=> {
    dispatch(productDetails(params.id))
    
  },[dispatch,product])



 



  // counter logic
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}`,{state:{qty:2}})
  }

  

  // counter logic ends

  return (
    <div className="md:mx-[81px] mx-[28px] mt-[30px] md:mt-[98px] ">
      <div className="flex flex-col md:flex-row gap-[74px] ">
        <img src={tyrion1} alt="" className="md:hidden" />
        <img src={product?.image} alt="" className="hidden md:block self-center" />
        <div className="w-[455px] ">
          <h1 className="font-bold text-2xl md:text-4xl mb-[10px] md:mb-[28px] ">
            {product?.name}
          </h1>
          <p className="text-xs md:text-xl opacity-[0.7] mb-[26px] md:mb-[53px] ">
            {product?.description}
          </p>
          <div className="flex gap-[16px] md:justify-between font-medium text-3xl mb-[26px] ">
            <div className="">
              <h6 className="text-xs md:text-lg">Price</h6>
              <h5 className="flex justify-center items-center w-[105px] md:w-[210px]  md:h-[93px] h-[46px] text-white bg-[#4D4D4D] rounded-lg text-sm md:text-xl py-[15px] px-[15px]">
                #{product?.price}
              </h5>
            </div>
            <div className="">
              <h6 className="text-xs md:text-lg">Quantity</h6>
              <div className=" flex md:gap-[47px] gap-[16px] justify-center items-center  text-white w-[105px]  md:w-[210px] h-[46px] md:h-[93px] bg-[#4D4D4D] rounded-lg py-[15px] px-[15px] text-sm md:text-xl">
                <h6 onClick={decrement} className="cursor-pointer">
                  -
                </h6>
                <h6 className="bg-white rounded-lg text-black p-[8px]  ">
                  {count}
                </h6>
                <h6 onClick={increment} className="cursor-pointer">
                  +
                </h6>
              </div>
            </div>
          </div>
          <hr />

          {/* size selection  */}

          <div className="flex gap-[21px] items-center text-xl mt-[30px] mb-[36px]">
            <h4 className="text-xs md:text-base">Size</h4>
            <div className="flex gap-[36px] items-center ">
              {
                product?.size?.split(/\s*,\s*/).map(sizes => {
                  return(
                    <div
                    className={`size-focus border-[1px]  border-solid border-black w-[20px] h-[20px] md:w-[37px] md:h-[37px] rounded md:rounded-lg flex items-center justify-center hover:bg-[#4D4D4D] hover:border-none hover:text-white cursor-pointer`}
                  >
                    <h5 className="text-[10px] md:text-base">{sizes}</h5>
                  </div>
                  )
                })
              }
            </div>
          </div>


          
          {/* size selection ends */}

          <hr />
          <div className="flex flex-col gap-[20px]">
            <button
              className="md:w-full w-[321px] h-[20px] text-xs md:text-base rounded md:h-[65px] border-[1px] border-solid border-[#FBC108DC] md:rounded-lg mt-[26px] "
              onClick={() => addToCartHandler()}
            >
              Add to cart
            </button>
            <button
              className="md:w-full w-[321px] h-[20px] text-xs md:text-base rounded md:h-[65px] bg-[#FBC108DC] md:rounded-lg text-white"
              onClick={() => navigate("/cart")}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="md:mt-[140px] mt-[75px] ">
        {/* carousel */}
        <div className="flex md:gap-[49px] gap-[13px] md:mb-[55px] mb-[21px] justify-center">
          <div className="flex flex-col md:w-[404px] w-[101px] bg-[#FDFCF2]">
            <img src={frame127} alt="" className="md:mb-[10px] " />
            <h5 className="self-center text-[6px] md:text-base font-medium md:mb-[10px]">
              Unisex Tyrion White hoodie
            </h5>
            <h5 className="self-center text-[#FFC700]  text-[6px] md:text-base">
              N15,000
            </h5>
            <button className="self-end mt-[10px]">
              <img src={cart} alt="" className="w-[11px] md:w-[44px] " />
            </button>
          </div>

          <div className="flex flex-col md:w-[404px]  w-[101px]  bg-[#FDFCF2]">
            <img src={frame126} alt="" className="md:mb-[10px] " />
            <h5 className="self-center text-[6px] md:text-base  font-medium md:mb-[10px]">
              Unisex Tyrion White hoodie
            </h5>
            <h5 className="self-center text-[#FFC700]  text-[6px] md:text-base">
              N15,000
            </h5>
            <button className="self-end mt-[10px]">
              <img src={cart} alt="" className="w-[11px] md:w-[44px] " />
            </button>
          </div>

          <div className="flex flex-col md:w-[404px]  w-[101px]  bg-[#FDFCF2]">
            <img src={frame127} alt="" className="md:mb-[10px] " />
            <h5 className="self-center text-[6px] md:text-base  font-medium md:mb-[10px]">
              Unisex Tyrion White hoodie
            </h5>
            <h5 className="self-center text-[#FFC700]  text-[6px] md:text-base">
              N15,000
            </h5>
            <button className="self-end mt-[10px]">
              <img src={cart} alt="" className="w-[11px] md:w-[44px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
