import axios from "axios";
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, CLEAR_ERRORS, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAIL} from "../constans/ProductConstans";

const url = "https://cultimax-gps52376.b4a.run"

export const getProduct =
  (keyword = "", currentPage , category) =>
  async (dispatch) => {
    try { 
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });
      let link = `${url}/api/v1/products?page=${currentPage}`;
      // console.log(category)
      if(keyword){
         link = `${url}/api/v1/products?keyword=${keyword}&page=${currentPage}`;
      }
      if(category){
       link = `${url}/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }

      // let link = `/api/v1/products`;
      const { data } = await axios.get(link);
      // console.log(data)
        
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getProductDetails= (id) => async (dispatch)=>{
       try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
    
        const { data } = await axios.get(`${url}/api/v1/products/${id}`);
           
        dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data.products,
        });
        
      } catch (error) {
        dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload: error.response.message,
        });
      }
    };



    // NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    // const config = {
    //   headers: { "Content-Type": "application/json" },
    // };
    // console.log(reviewData)
    const { data } = await axios.post(`${url}/api/v1/products/review`, reviewData)
    // .catch(
    //   function(error)
    //   {console.log(error)}
    //   );

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


  //Clear Errors
  export const clearErrors= () => async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
  }