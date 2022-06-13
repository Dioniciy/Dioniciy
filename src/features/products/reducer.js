import {
  GET_PRODUCTS,
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_CART,
} from "./actions.js";
import { PRODUCTS_INITIAL_STATE } from "fixtures";

export function products(state = PRODUCTS_INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        numberOfProducts: action.payload.numberOfProducts,
        products: action.payload.products,
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload
            ? { ...product, isWished: true }
            : product;
        }),
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, isWished: false }
            : product
        ),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((product) => {
          return product.uniqId !== action.payload;
        }),
      };
    case CLEAR_WISHLIST:
      return {
        ...state,
        products: state.products.map((product) => {
          return {
            ...product,
            isWished: false,
          };
        }),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartProducts: (state.cartProducts = []),
      };
    default:
      return state;
  }
}
