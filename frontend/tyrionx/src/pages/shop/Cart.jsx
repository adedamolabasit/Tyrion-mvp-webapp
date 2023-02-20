import React, { useEffect, useState } from "react";
import cart1 from "../../assets/cart1.svg";
import cart2 from "../../assets/cart2.svg";
import cart3 from "../../assets/cart3.svg";
import vectorx from "../../assets/Vector X.svg";
import { useLocation, Link, useParams } from "react-router-dom";
import cart from "../../assets/cart-btn.svg";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../store/actions/cartActions";

function Cart() {
  const { state } = useLocation();

  const params = useParams();

  const dispatch = useDispatch();

  const qty = state.qty ? state : 1;

  const productId = params.id;

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const [cartStore, setCartStore] = useState(cartItems);
  console.log(productId, "efef");

  useEffect(() => {
    dispatch(addTocart(productId, 2));
    setCartStore(cartItems);
    console.log("cartItems", cartStore);
  }, [dispatch, cartItems]);

  return (
    <div className="flex flex-col gap-[16px] md:gap-[40px] md:mt-[138px] mt-[38px] mx-[28px] md:mx-[81px] ">
      {/* card 2 */}
      <div
        className="cart md:pb-[8.34px] pb-[4px] pl-[4px] md:pl-[8.34px] md:w-[1150px] w-[331px] h-[84px] md:h-[292px] bg-[
#FEFEF9]  flex md:gap-[17px] gap-[8px] rounded md:rounded-lg "
      >
        <img
          src={cartStore.image}
          width="45px"
          alt=""
          className="w-[68px] md:w-[210px] md:h-[210px] h-[80px]"
        />
        <div className="pr-[17px]">
          <img
            src={vectorx}
            alt=" "
            className="md:ml-[872px] ml-[240px] w-[7px] md:w-[19px]  "
          />
          <h1 className="font-medium md:text-3xl text-xs">{cartStore.name}</h1>
          <p className="text-[#fbc108] md:text-2xl text-[7px] md:mt-[8px] font-medium ">
            {cartStore.price}
          </p>
          <p className="md:mt-[8px] text-[5px] md:text-base text-[#00000028] font-medium ">
            Qty:2pcs
          </p>
          <div className="md:w-[649px] w-[187px] mt-[10px] md:mt-[33px] h-[2px] md:h-[4px] bg-[#D9D9D9] "></div>
          <div className="md:mt-[12px] mt-[4px] flex ml-[20px]">
            <p className="text-[#00000075] md:mr-[418px] mr-[120px] md:text-base text-[5px] ">
              Sub Total:
            </p>
            <p className="text-[#fbc108] md:text-2xl text-[7px] font-medium md:mr-[85px] mr-[20px] ">
              N30,000
            </p>
            <button className="md:w-[172px] w-[49px] md:h-[60px] h-[17px] bg-[#fcb108] text-white rounded text-[6px] md:text-base  md:rounded-lg hover:bg-[#FFCC00] active-bg-[#fbc10886]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* end of card 2 */}

      {/* card 3 */}

      <div className="w-full h-[4px] bg-[#fcb10832]"></div>
      <p className="self-end font-bold text-sm md:text-3xl mb-[27px]">
        Total: N90,000
      </p>
    </div>
  );
}

export default Cart;
