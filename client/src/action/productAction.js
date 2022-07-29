import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESFULL,
  PRODUCT_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESFULL,
  PRODUCT_DETAIL_FAIL,
} from "../constant/productConstant";

import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_SUCCESFULL, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: error,
    });
  }
};
export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAIL_SUCCESFULL, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: error,
    });
  }
};
