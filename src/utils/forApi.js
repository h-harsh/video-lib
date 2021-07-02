import axios from "axios";

export const baseurl = "http://127.0.0.1:8000";

export const deletePlaylistHandler = async (playlistName, token) => {
  const response = await axios.delete(`${baseurl}/playlist/${playlistName}`, {
    headers: { authorization: token },
  });
  // Now frontend update bro
};

export const deleteVideoHandler = async (playlistName, videoId, token) => {
  try {
    const response = await axios.delete(
      `${baseurl}/playlist/${playlistName}/${videoId}`,
      { headers: { authorization: token } }
    );
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

export const addToPlaylist = async (playlistName, videoId, token) => {
  console.log(playlistName, videoId, token)
  try {
    const response = await axios.post(
      `${baseurl}/playlist/${playlistName}/${videoId}`,{},
      { headers: { authorization: token } }
    );
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

export const createPlaylist = async (playlistName, token) => {
  try {
    const response = await axios.post(
      `${baseurl}/playlist/${playlistName}`,
      {  },
      {
        headers: { authorization: token },
      }
    );
  } catch (error) {
    console.log(error.response);
  }
};
