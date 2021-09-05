import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
// import '../App.css'
import { useParams } from "react-router";
import { addToPlaylist, createPlaylist } from "../../utils/forApi";
import { usePlayList } from "../../Contexts/playListContext";
import { useAuth } from "../../Contexts/authContext";
import { InToast } from "../Toast/toast";
import { MdPlaylistAdd } from "react-icons/md";
import "./playlistModal.css";

export const Modale = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { allVideosData } = usePlayList();
  const { state, dispatch, token } = useAuth();
  const [playlistName, setPlaylistName] = useState("");
  const { videoId } = useParams();
  const [toastStatus, setToastStatus] = useState(false);
  const [count, setCount ] = useState(0)

  // Getting video details
  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video.videoId === videoId);
  }
  const video = getVideoDetails(allVideosData, videoId);
console.log(state)
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
    <>
      <Button
        className="playlist-btn"
        onClick={token ? showModal : () => setToastStatus(true)}
      >
        <MdPlaylistAdd />
      </Button>
      {toastStatus ? (
        <div onClick={() => setToastStatus(false)}>
          {" "}
          <InToast value={true} text={"You need to login"} />{" "}
        </div>
      ) : null}

      <Modal
        title="Add Video To Playlist"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <h3>Create a new playlist</h3>
          <input
            type="text" id="add-video" 
            onChange={(event) => setPlaylistName(event.target.value)}
          />

          <button
            onClick={() => createPlaylist(playlistName, token, dispatch, video, setPlaylistName)}
            className="create-btn"
          >
            Create
          </button>
        </div>
        <br />
        <div>
          <h3>Add to existing playlist</h3>
          {state?.playlists?.map((item) => {
            return (
              <label className="playlist-item">
                <input
                  type="checkbox"
                  checked={item.videos.find(item2 => item2._id === video._id) ? true : false}
                  onChange={() =>
                    addToPlaylist(item.playlistName, video, token, dispatch)
                  }
                />
                {item.playlistName}
              </label>
            );
          })}
        </div>
      </Modal>
    </>
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
