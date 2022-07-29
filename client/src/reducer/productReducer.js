import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESFULL,
  PRODUCT_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESFULL,
  PRODUCT_DETAIL_FAIL,
} from "../constant/productConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_SUCCESFULL:
      return { loading: false, products: action.payload };
    case PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ProductDetails = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAIL_SUCCESFULL:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
