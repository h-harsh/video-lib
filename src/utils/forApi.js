import axios from "axios";

export const baseurl = "https://fin-tube.herokuapp.com";
// export const baseurl = "http://127.0.0.1:8080";

export const deletePlaylistHandler = async (playlistName, token, dispatch) => {
  const response = await axios.delete(`${baseurl}/playlist/${playlistName}`, {
    headers: { authorization: token },
  });
  if(response.status === 200){
    dispatch({ type: "REMOVE_PLAYLIST", payload: playlistName })
  }
};

export const deleteVideoHandler = async (playlistName, videoId, token,dispatch) => {
  try {
    const response = await axios.delete(
      `${baseurl}/playlist/${playlistName}/${videoId}`,
      { headers: { authorization: token } }
    );
    if(response.status === 200){
      dispatch({type: "REMOVE_FROM_PLAYLIST", payload:{playlistName, videoId}})
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const addToPlaylist = async (playlistName, video, token, dispatch) => {
  console.log(playlistName, video._id, token)
  try {
    const response = await axios.post(
      `${baseurl}/playlist/${playlistName}/${video._id}`,{},
      { headers: { authorization: token } }
    );
    if(response.status === 200){
      dispatch({type: "ADD-VIDEO-TO-PLAYLIST", payload: {playlistName, videoObj: video }})
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const createPlaylist = async (playlistName, token, dispatch) => {
  try {
    const response = await axios.post(
      `${baseurl}/playlist/${playlistName}`,
      {  },
      {
        headers: { authorization: token },
      }
    );
    if(response.status === 200){
      dispatch({ type: "ADD_PLAY_LIST_NAME", payload: playlistName })
    }
  } catch (error) {
    console.log(error.response);
  }
};
