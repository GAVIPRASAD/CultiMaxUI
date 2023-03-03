import { ADD_TO_FAVOURITE,  REMOVE_FROM_FAVOURITE}
from "../constans/FavouriteConstans";
import axios from "axios";
// import { url } from "./url";

// Add to favourites
export const addFavouriteItemsToCart = (id,quantity) => async (dispatch, getState) =>{

    const {data} = await axios.get(`/api/v1/products/${id}`)
    
    // .then(function (response) {
    //     console.log(response);
    //   })
    // .catch(((error)=> console.log(error)));
    // console.log(data);

    dispatch({
        type: ADD_TO_FAVOURITE,
        payload: {
            product: data.products._id,
            name: data.products.name,
            price: data.products.price,
            image: data.products.images[0].url,
            stock: data.products.Stock,
            quantity,
        }
    })
    localStorage.setItem("favouriteItems", JSON.stringify(getState().favourite.favouriteItems));
    // console.log(getState().favourite.favouriteItems);
    }

// Delete from favourites
export const deleteFavouriteItemsToCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITE,
      payload: id,
    });
  
    localStorage.setItem("favouriteItems", JSON.stringify(getState().favourite.favouriteItems));
  };
