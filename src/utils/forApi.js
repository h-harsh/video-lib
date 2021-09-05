import axios from "axios";
import {  toast } from 'react-toastify';

export const baseurl = "https://fin-tube.herokuapp.com";
// export const baseurl = "http://127.0.0.1:8080";

export const deletePlaylistHandler = async (playlistName, token, dispatch) => {
  const toastId =toast.loading("Deleting Playlist")
  const response = await axios.delete(`${baseurl}/playlist/${playlistName}`, {
    headers: { authorization: token },
  });
  if(response.status === 200){
    dispatch({ type: "REMOVE_PLAYLIST", payload: playlistName })
    toast.update(toastId, { render: "Playlist Deleted", type: "success", isLoading: false, autoClose: 3000,  });
  }
};

export const deleteVideoHandler = async (playlistName, videoId, token,dispatch) => {
  try {
    const toastId =toast.loading("Removing Video")
    const response = await axios.delete(
      `${baseurl}/playlist/${playlistName}/${videoId}`,
      { headers: { authorization: token } }
    );
    if(response.status === 200){
      dispatch({type: "REMOVE_FROM_PLAYLIST", payload:{playlistName, videoId}})
      toast.update(toastId, { render: "Video Removed", type: "success", isLoading: false, autoClose: 3000,  });
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const addToPlaylist = async (playlistName, video, token, dispatch) => {
  console.log(playlistName, video._id, token)
  try {
    const toastId =toast.loading("Adding to Playlist")
    const response = await axios.post(
      `${baseurl}/playlist/${playlistName}/${video._id}`,{},
      { headers: { authorization: token } }
    );
    if(response.status === 200){
      dispatch({type: "ADD-VIDEO-TO-PLAYLIST", payload: {playlistName, videoObj: video }})
      toast.update(toastId, { render: "Added to playlist", type: "success", isLoading: false, autoClose: 3000,  });
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const createPlaylist = async (playlistName, token, dispatch, video, setPlaylistName) => {
  try {
    const toastId =toast.loading("Creating Playlist")
    const response = await axios.post(
      `${baseurl}/playlist/${playlistName}`,
      {  },
      {
        headers: { authorization: token },
      }
    );
    if(response.status === 200){
      dispatch({ type: "ADD_PLAY_LIST_NAME", payload: playlistName })
      toast.update(toastId, { render: "Created Playlist", type: "success", isLoading: false, autoClose: 3000,  });
      document.getElementById('add-video').value = ""
      setPlaylistName('')
      addToPlaylist(playlistName, video, token, dispatch)

      
    }
  } catch (error) {
    console.log(error.response);
  }
};
