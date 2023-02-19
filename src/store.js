import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from "./reducers/ProductReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails:productDetailsReducer,
})

let initialState = {
  // products: productsReducer,
};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
  
  export default store;