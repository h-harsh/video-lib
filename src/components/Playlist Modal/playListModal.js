import React, {  useState } from "react";
import { Modal } from "antd";
import { useParams } from "react-router";
import {
  addToPlaylist,
  createPlaylist,
  deleteVideoHandler,
} from "../../utils/forApi";
import { usePlayList } from "../../Contexts/playListContext";
import { useAuth } from "../../Contexts/authContext";
import { MdPlaylistAdd } from "react-icons/md";
import "./playlistModal.css";
import { toast } from "react-toastify";
import { SecondaryButton } from "../../New Components";

export const Modale = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { allVideosData } = usePlayList();
  const { state, dispatch, token } = useAuth();
  const [playlistName, setPlaylistName] = useState("");
  const { videoId } = useParams();

  // Getting video details
  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video.videoId === videoId);
  }
  const video = getVideoDetails(allVideosData, videoId);
  console.log(state);
  // Modal thing
  const showModal = () => {
    if (token) {
      setIsModalVisible(true);
    }
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="modal-outer">
      <button
        className="playlist-btn"
        onClick={token ? showModal : () => toast.error("You need to Login")}
        style={{ color: "#5c415d" }}
      >
        <MdPlaylistAdd />
      </button>
      {/* {toastStatus ? (
        <div onClick={() => setToastStatus(false)}>
          {" "}
          <InToast value={true} text={"You need to login"} />{" "}
        </div>
      ) : null} */}

      <Modal
        title="Add Video To Playlist"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ backgroundColor: "#f6f7eb" }}
        footer={null}
      >
        <div style={{textAlign:'center'}} >
          <h3 className="modal-sub-title" >Create a new playlist</h3>
          <input
            className="input-element-modal"
            type="text"
            id="add-video"
            onChange={(event) => setPlaylistName(event.target.value)}
          />

          <SecondaryButton
            text="Create"
            clickHandler={() =>
              createPlaylist(
                playlistName,
                token,
                dispatch,
                video,
                setPlaylistName
              )
            }
          />
        </div>
        <br />
        <h3 style={{margin:'0.5rem', textAlign:'center'}} >Or</h3>
        <div style={{textAlign:'center'}}>
          <h3 className="modal-sub-title" >Add to existing playlist</h3>
          {state?.playlists?.map((item) => {
            return (
              <label className="playlist-item">
                <input
                  className="input-box"
                  type="checkbox"
                  checked={
                    item.videos.find((item2) => item2._id === video._id)
                      ? true
                      : false
                  }
                  onChange={() =>
                    item.videos.find((item2) => item2._id === video._id)
                      ? deleteVideoHandler(
                          item.playlistName,
                          video._id,
                          token,
                          dispatch
                        )
                      : addToPlaylist(item.playlistName, video, token, dispatch)
                  }
                  // onChange={() =>
                  //   addToPlaylist(item.playlistName, video, token, dispatch)
                  // }
                />
                {item.playlistName}
              </label>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export const RemoveFromPlayListButton = ({ videoId, playlist_name }) => {
  const { dispatch } = usePlayList();
  return (
    <button
      className="btn btn-link2 "
      onClick={() =>
        dispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: {
            playlistName: playlist_name,
            videoObj: videoId,
          },
        })
      }
    >
      Remove
    </button>
  );
};
