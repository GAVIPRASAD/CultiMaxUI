import { CLEAR_ERRORS, CROP_PREDICTION, CROP_PREDICTION_FAIL, CROP_PREDICTION_SUCCESS, FERTILIZER_RECOMMENDATION, FERTILIZER_RECOMMENDATION_FAIL, FERTILIZER_RECOMMENDATION_SUCCESS, SUBMIT_ML_IMAGE, SUBMIT_ML_IMAGE_FAIL, SUBMIT_ML_IMAGE_SUCCESS } from "../constans/MlConstans";

export const diseaseDetectionReducer = (state = { disease: {} }, action) => {
    switch (action.type) {
      case SUBMIT_ML_IMAGE:
        return {
          loading: true,
        };
      case SUBMIT_ML_IMAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          disease: action.payload,
        };
  
      case SUBMIT_ML_IMAGE_FAIL:
        return {
          loading: false,
          disease: null,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

export const cropPredictionReducer = (state = { crop: {} }, action) => {
    switch (action.type) {
      case CROP_PREDICTION:
        return {
          loading: true,
        };
      case CROP_PREDICTION_SUCCESS:
        return {
          ...state,
          loading: false,
          crop: action.payload,
        };
  
      case CROP_PREDICTION_FAIL:
        return {
          loading: false,
          crop: null,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

export const fertilizerRecommendationReducer = (state = { fertilizer: {} }, action) => {
    switch (action.type) {
      case FERTILIZER_RECOMMENDATION:
        return {
          loading: true,
        };
      case FERTILIZER_RECOMMENDATION_SUCCESS:
        return {
          ...state,
          loading: false,
          fertilizer: action.payload,
        };
  
      case FERTILIZER_RECOMMENDATION_FAIL:
        return {
          loading: false,
          fertilizer: null,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };