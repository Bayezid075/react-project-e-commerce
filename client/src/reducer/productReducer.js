import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESFULL,
  PRODUCT_FAIL,
} from "../constant/productConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_SUCCESFULL:
      return { loading: false, products: action.payload };
    case PRODUCT_FAIL:
      return { loading: false };

    default:
      return state;
  }
};
