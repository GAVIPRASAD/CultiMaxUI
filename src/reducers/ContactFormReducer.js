import { CLEAR_ERRORS, SUBMIT_CONTACT_FORM, SUBMIT_CONTACT_FORM_FAIL, SUBMIT_CONTACT_FORM_SUCCESS } from "../constans/ContactConstans";


export const newContactFormReducer = (state = {contactForm:{}}, action) => {
    switch (action.type) {
      case SUBMIT_CONTACT_FORM:
        return {
          ...state,
          loading: true,
        };
  
      case SUBMIT_CONTACT_FORM_SUCCESS:
        return {
          loading: false,
          contactForm: action.payload,
        };
  
      case SUBMIT_CONTACT_FORM_FAIL:
        return {
          loading: false,
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