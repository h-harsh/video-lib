import axios from "axios";
import { useEffect, useState } from "react";
// import { VideoCard } from "../components/videoCard";
import { usePlayList } from "../playListContext";

export const PlayList = () => {
  const { state, dispatch, token, isUserLogin } = usePlayList();
  const [playlistData, setPlaylistData] = useState(undefined);
  const baseurl = "http://127.0.0.1:8000";

  useEffect(() => {
    (async function () {
      if(token)
      {
        const response = await axios.get(`${baseurl}/playlist`, {
          headers: { authorization: token },
        });
        console.group(response)
        if (response.data.status === "success") {
          setPlaylistData(response.data.playlistData);
          console.log(playlistData)
        } else {
          setPlaylistData("error");
        }
      }
    })();
  }, [token]);
  return (
    <>
      <h1 className="page-title">PlayLists</h1>
      {playlistData === "error" && <h2>False authorization, please login</h2>}
      {playlistData === undefined ? (
        <h2>Loading</h2>
      ) : (
        <h2>Map on array data</h2>
      )}
    </>
  );
};

// {state.map(item => {
//     return (
//     <div style={{ border: "1px solid black", margin: "1rem", display: 'inline-block' }}>
//         <button className="btn cta"
//             onClick={() => dispatch({ type: "REMOVE_PLAYLIST", payload: { playlistName: item.playlist_name } })}>
//         X</button>
//         <h2 className="playlist-name" >{item.playlist_name}</h2>
//         {item.videos.map(item2 => {
//             return (<VideoCard {...item2} {...item} remove />)
//         })}
//     </div>)
// })}
