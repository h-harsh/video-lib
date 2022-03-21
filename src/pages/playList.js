import "./pages.css";
import { HorizontalCard } from "../components/Cards/horizontalCard";
import { useAuth } from "../Contexts/authContext";
import { deletePlaylistHandler, deleteVideoHandler } from "../utils/forApi";
import { AiFillDelete } from "react-icons/ai";

export const PlayList = () => {
  const { state, dispatch, token } = useAuth();

  return (
    <>
      {state === undefined ? (
        <h2>Loading</h2>
      ) : (
        state.playlists?.map((item, i) => {
          return (
            <div className="each-playlist only-card" >
              <div className="playlist-heading-box">
                <h1>{i+1}.</h1>
                <h1>{item.playlistName}</h1>
                <button
                  className="delete-dibba-big"
                  onClick={() =>
                    deletePlaylistHandler(item.playlistName, token, dispatch)
                  }
                >
                  <AiFillDelete className="delete-dibba-big-icon" />
                </button>
              </div>

              {item.videos.length > 0 ? (
                item.videos.map((video) => {
                  return (
                    <div className="playlist-videos-box">
                      <HorizontalCard video={video} />
                      <button
                        className="delete-dibba-small"
                        onClick={() =>
                          deleteVideoHandler(
                            item.playlistName,
                            video._id,
                            token,
                            dispatch
                          )
                        }
                      >
                        <AiFillDelete size={22} />{" "}
                      </button>
                    </div>
                  );
                })
              ) : (
                <h2>No Videos in playlist</h2>
              )}
            </div>
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
