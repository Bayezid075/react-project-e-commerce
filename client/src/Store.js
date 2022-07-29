import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducer/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({
  productList: productReducer,
});
const initalState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
if (store) {
  console.log("store created !");
}

export default store;
