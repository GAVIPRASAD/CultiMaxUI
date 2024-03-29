import {
  CLEAR_ERRORS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../constans/UserConstans";
import axios from "axios";

// import { url } from "./url";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    // const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
    //   config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
//   console.log("loggedin")
};


// Register
export const register = (userData) => async (dispatch) => {
  // console.log(userData)
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    //   const config = { headers: { "Content-Type": "multipart/form-data" } }; ,config in post method to use this
    const data = await axios
      .post(`/api/v1/registration`, userData)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });

    dispatch({ type: REGISTER_USER_SUCCESS, payload: userData });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) =>{
  try {
      dispatch({type: LOAD_USER_REQUEST});
           // eslint-disable-next-line
      // const config = { headers:{ "Content-Type": "application/json"} };

      const {data} = await axios.get(`/api/v1/me`);
           
     dispatch({type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {  
      dispatch({type: LOAD_USER_FAIL, payload: error.response.data.message});
  }
}

// Log out user
export const logout = () => async (dispatch) =>{
  try {        
    await axios.post(`/api/v1/logout`).then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    });
           
    dispatch({type: LOGOUT_SUCCESS});
  } catch (error) {  
      dispatch({type: LOGOUT_FAIL, payload: error.response.data.message});
  }
}

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Password 
export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/me/update/password`, password, config);

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    // const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      // config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

  // Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  // console.log(userData);
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    // const config = { headers: { "Content-Type": "multipart/form-data" } }; -, config after userdata in axios

    const { data } = await axios.put(`/api/v1/me/update/info`, userData).catch(function (error) {
      // console.log(error);
      
    });
    

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
