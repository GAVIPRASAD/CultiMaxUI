import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constans/CartConstans";
  import axios from "axios";
  
  // Add to Cart ---Product
  export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/products/${id}`);
    // console.log(data)
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.products._id,
        name: data.products.name,
        price: data.products.price,
        image: data.products.images[0].url,
        stock: data.products.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  // REMOVE FROM CART ---Product
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };


  // SAVE SHIPPING INFO 
  export const saveShippingInfo = (data) => async (dispatch) => {
    // console.log(data);
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };