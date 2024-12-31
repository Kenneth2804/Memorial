import { types } from "../actions";

const initial = {
user: null
  };
  
  export default function rootReducer(state = initial, action) {
    switch (action.type) {
      
      case types.POST_USER: 
      return {
        ...state,
        user: action.payload
      }
   
      default:
        return { ...state };
    }
  }