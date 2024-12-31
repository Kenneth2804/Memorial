import axios from "axios";
import { useDispatch } from 'react-redux';
const URL="/";

export const types ={
    POST_USER: "POST_USER"
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