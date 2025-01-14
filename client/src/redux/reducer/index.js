import { types } from "../actions";

const initial = {
  user: null,
  isLoading: false,
  error: null
};

export default function rootReducer(state = initial, action) {
  switch (action.type) {
    case types.POST_USER:
      return {
        ...state,
        user: action.payload
      };

    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };

    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
      case types.LOGOUT_USER:
        return {
          ...state,
          user: null,       
          isLoading: false, 
          error: null,      
        };

    default:
      return { ...state };
  }
}
 