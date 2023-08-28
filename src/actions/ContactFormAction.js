import axios from "axios";
import {SUBMIT_CONTACT_FORM, SUBMIT_CONTACT_FORM_FAIL, SUBMIT_CONTACT_FORM_SUCCESS} from "../constans/ContactConstans"
export const submitContactForm = (form) => async (dispatch) => {
    try {
      dispatch({ type: SUBMIT_CONTACT_FORM });
      // const config = { headers: { "Content-Type": "application/json" } };
      // console.log(form);
      const { data } = await axios.post(
        `/api/v1/contact/new`,
        form,
        // config
      );
      dispatch({ type: SUBMIT_CONTACT_FORM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SUBMIT_CONTACT_FORM_FAIL, payload: error.response.data.message });
    }
  //   console.log("loggedin")
  };