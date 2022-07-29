import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESFULL,
  PRODUCT_FAIL,
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
