import axios from "axios";
import { useEffect, useState } from "react";
import { VideoCard } from "../components/videoCard";
import { usePlayList } from "../Contexts/playListContext";
import { useAuth } from "../Contexts/authContext";
import { deletePlaylistHandler, deleteVideoHandler } from "../utils/forApi";

export const PlayList = () => {
  const { state, dispatch, token } = useAuth();

  console.log(state)

  return (
    <>
      <h1 className="page-title">PlayLists</h1>
      {state === "error" && <h2>False authorization, please login</h2>}
      {state === undefined ? (
        <h2>Loading</h2>
      ) : (
        state.map((item) => {
          return (
            <>
              <h2>{item.playlistName}</h2>
              <button
                onClick={() => deletePlaylistHandler(item.playlistName, token, dispatch)}
              >
                Delete playlist
              </button>

              {item.videos.length > 0 ? (
                item.videos.map((videoItem) => {
                  return (
                    <>
                      <h3>{videoItem.title}</h3>
                      <p>{videoItem.author}</p>
                      <button
                        onClick={() =>
                          deleteVideoHandler(
                            item.playlistName,
                            videoItem._id,
                            token, dispatch
                          )
                        }
                      >
                        Remove videos
                      </button>
                    </>
                  );
                })
              ) : (
                <h2>No Videos in playlist</h2>
              )}
            </>
          );
        })
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
