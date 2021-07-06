import axios from 'axios'
import { baseurl } from './forApi';

export const addToLiked = async (video, token, dispatch) => {
    const videoId= video._id;
    try{
        const response = await axios.post(`${baseurl}/likedVideos/${videoId}`,{},
    { headers: { authorization: token } }
    )
    if(response.status === 200){
        dispatch({type: "ADD_TO_LIKED", payload: video })
      }
    }catch(error){
        console.log(error.response)
    }
};

export const removeFromLiked = async (video, token, dispatch) => {
    console.log(token)
    const videoId= video._id;
    try{
        const response = await axios.delete(`${baseurl}/likedVideos/${videoId}`,
    { headers: { authorization: token } }
    )
    if(response.status === 200){
        dispatch({type: "REMOVE_FROM_LIKED", payload: video })
      }
    }catch(error){
        console.log(error.response)
    }
};