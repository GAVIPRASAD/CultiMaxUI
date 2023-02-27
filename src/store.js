import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from "./reducers/ProductReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/UserReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";
import { cartReducer } from "./reducers/CartReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/OrderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails:productDetailsReducer,

  order: newOrderReducer,
  myOrder: myOrdersReducer,
  myOrderDetails: orderDetailsReducer,


  user:userReducer,
  profile: profileReducer,
  forgotPassword:forgotPasswordReducer,
  favourite: favouriteReducer,
  cart:cartReducer,
  })

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  favourite: {
    favouriteItems: localStorage.getItem("favouriteItems")
      ? JSON.parse(localStorage.getItem("favouriteItems"))
      : [],
  },
  
};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
  
  export default store;