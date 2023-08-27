import axios from "axios";
import { CLEAR_ERRORS, CROP_PREDICTION, CROP_PREDICTION_FAIL, CROP_PREDICTION_SUCCESS, FERTILIZER_RECOMMENDATION, FERTILIZER_RECOMMENDATION_FAIL, FERTILIZER_RECOMMENDATION_SUCCESS, SUBMIT_ML_IMAGE, SUBMIT_ML_IMAGE_FAIL, SUBMIT_ML_IMAGE_SUCCESS } from "../constans/MlConstans";

export const detectDisease = (disease) => async (dispatch) => {
    try {
      // console.log(disease.image);
      dispatch({ type: SUBMIT_ML_IMAGE });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`https://cultimaxd2.onrender.com`,disease,config
      //   config
      );
      dispatch({ type: SUBMIT_ML_IMAGE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SUBMIT_ML_IMAGE_FAIL, payload: error });
      // console.log(error)
    }
  };

export const cropPrediction = (crop) => async (dispatch) => {
    try {
      // console.log(disease.image);
      dispatch({ type: CROP_PREDICTION });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`https://cultimaxcd.onrender.com/crop_recommend`,crop,config
      //   config
      );
      dispatch({ type: CROP_PREDICTION_SUCCESS, payload: data });
      // console.log(data);
    } catch (error) {
      dispatch({ type: CROP_PREDICTION_FAIL, payload: error.name });
    }
  };

export const fertilizerRecommendation = (fertilizer) => async (dispatch) => {
    try {
      // console.log(disease.image);
      dispatch({ type: FERTILIZER_RECOMMENDATION });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`https://cultimaxcd.onrender.com/fertilizer_recommend`,fertilizer,config
      //   config
      );
      dispatch({ type: FERTILIZER_RECOMMENDATION_SUCCESS, payload: data });
      // console.log(data);
    } catch (error) {
      dispatch({ type: FERTILIZER_RECOMMENDATION_FAIL, payload: error.name });
      // console.log(error);
    }
  };


  

  export const clearErrors = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };