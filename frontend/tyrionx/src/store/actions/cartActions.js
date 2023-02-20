import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEEM } from "../../constants/cartConstant";

export const addTocart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInstock: data.countInstock,
      qty
    },
  });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};
