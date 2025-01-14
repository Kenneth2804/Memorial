import axios from "axios";
import { useDispatch } from 'react-redux';
const URL="/";

export const types ={
    POST_USER: "POST_USER",
    LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
    LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE",
    LOGOUT_USER: "LOGOUT_USER"
}

export const postuser = (payload) =>{
    return async function (dispatch) {
        
        try {
            let json = await axios.post(`${URL}register`, payload);
            return json
        } catch (error) {
            console.log(error)
        }
    }
}

export const loginUser = (payload) => {
  return async (dispatch) => {
      dispatch({ type: types.LOGIN_USER_REQUEST });
      try {
          const response = await axios.post(`${URL}login`, payload);
          const { token } = response.data;

          localStorage.setItem("token", token);
        console.log("token", token)
          dispatch({
              type: types.LOGIN_USER_SUCCESS,
              payload: response.data
          });

          return response.data; 
      } catch (error) {
          dispatch({
              type: types.LOGIN_USER_FAILURE,
              error: error.response ? error.response.data : "Error de conexión"
          });
          throw error; 
      }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No se encontró el token");
      }

      await axios.post(`${URL}logout`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");

      dispatch({ type: types.LOGOUT_USER });

      console.log("Sesión cerrada exitosamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      throw error;
    }
  };
};
