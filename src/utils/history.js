import axios from 'axios'
import { baseurl } from './forApi';

// Adding to history
export const addToHistory = async (videoObj, dispatch, token) => {
    const videoId = videoObj._id;
    try {
        const response = await axios.post(
          `${baseurl}/history`,{videoId},
          { headers: { authorization: token } }
        );
        if(response.status === 200){
          dispatch({type: "ADD_TO_HISTORY", payload: videoObj })
        }
      } catch (error) {
        console.log(error.response);
        
      }
};

export const clearHistory = async ( token, dispatch) => {
    try {
        const response = await axios.delete(
          `${baseurl}/history`,
          { headers: { authorization: token } }
        );
        if(response.status === 200){
          dispatch({type: "CLEAR_HISTORY" })
        }
      } catch (error) {
        console.log(error.response);
        
      }
}