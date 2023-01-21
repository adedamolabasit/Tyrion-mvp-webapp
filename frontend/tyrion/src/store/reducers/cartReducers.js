import { CART_ADD_ITEM,CART_REMOVE_ITEEM} from "../../constants/cartConstant"
export const  cartReducers = (state = {cartItems:[]},action) =>
    {
        switch(action.type) {
            case CART_ADD_ITEM:
                const item = action.payload
                const existItem = state.cartItems.find(items => items.product === item.product)
                console.log('state..')
                if (existItem){
                    return {
                        ...state,
                        cartItems:state.cartItems.map(items =>
                             items.product === existItem.product ? item : items)
                    }

                }
                else{
                    return{
                        ...state,
                        cartItems:{...state.cartItems,...item}
                    }
                }
              
            default:     
                return state
        }
    }
    // a