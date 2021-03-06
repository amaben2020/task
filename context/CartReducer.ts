import { IAction, IState } from '../interface/cart';
import {
  ADD_TO_CART,
  CLEAR_CART,
  CLOSE_CART_DROPDOWN,
  REMOVE_ITEM_FROM_CART,
} from './types';

export const CartReducer = (state: IState, action: IAction): IState => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        //@ts-ignore
        //both logic are valid
        cartItems: [...state.cartItems, payload],
        // cartItems: state.cartItems.concat(payload),
      };
    case CLOSE_CART_DROPDOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload!.id),
      };

    case CLEAR_CART: {
      return {
        ...state,
        //both logic are valid (declarative vs imperative)
        cartItems: [],

        // cartItems: state.cartItems.splice(
        //   0,
        //   state.cartItems.length - state.cartItems.length
        // ),
      };
    }

    default:
      return state;
  }
};
