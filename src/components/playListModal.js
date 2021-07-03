import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import '../App.css'
import { useParams } from 'react-router';
import { addToPlaylist, createPlaylist } from '../utils/forApi';
import { usePlayList } from "../Contexts/playListContext";
import { useAuth } from "../Contexts/authContext";


export const Modale = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {  allVideosData } = usePlayList()
  const { state, dispatch, token } = useAuth();
  const [playlistName, setPlaylistName] = useState("")
  const { videoId } = useParams();
  // const [playlistData, setPlaylistData] = useState(undefined);

  // Getting video details
  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video.videoId === videoId);
  }
  const video = getVideoDetails(allVideosData, videoId);
  // console.log(video)

  // Modal thing
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

console.log(state)
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add to play list
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <h3>Create a new playlist</h3>
          <input type="text" onChange={(event) => setPlaylistName(event.target.value)} />

          <button
          onClick={() => createPlaylist(playlistName, token, dispatch)}

            className="create-btn" >
            Create
          </button>

        </div>
        <br />
        <div>
          <h3>Add to existing playlist</h3>
          {
            state.map(item => {
              return (
                <label className="playlist-item" >
                  <input type="checkbox"
                    onChange={() => addToPlaylist( item.playlistName,video, token, dispatch )}
                  />
                  {item.playlistName}
                </label>
              )
            })
          }
        </div>

      </Modal>
    </>
  );
};


export const RemoveFromPlayListButton = ({ videoId, playlist_name }) => {
  const { dispatch } = usePlayList()
  return (
    <button className="btn btn-link2 "
      onClick={() => dispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload:
        {
          playlistName: playlist_name,
          videoObj: videoId
        }
      })}
    >Remove</button>
  )
}