import React, { useContext, useState } from 'react';
import { Modal, Button } from 'antd';
import { PlayListContext } from '../playListContext'
import '../App.css'
import { data } from '../dataApi/data'
import { useParams } from 'react-router';


export const Modale = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { state, dispatch } = useContext(PlayListContext);
  const [playListName, setPlayListName] = useState()
  const { videoId } = useParams();

  // Getting video details
  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video.videoId === videoId);
  }
  const video = getVideoDetails(data, videoId);

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


  return (
    <>
      <Button  type="primary" onClick={showModal}>
        Add to play list
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <h3>Create a new playlist</h3>
          <input type="text" onChange={(event) => setPlayListName(event.target.value)} />
          <button onClick={() => dispatch({ type: "ADD_PLAY_LIST_NAME", payload: playListName })}
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
                    onChange={() => dispatch({
                      type: "ADD-VIDEO-TO-PLAYLIST",
                      payload: item.playlist_name,
                      payload2: video
                    })}
                  />
                  {item.playlist_name}
                </label>
              )
            })
          }
        </div>

      </Modal>
    </>
  );
};


export const RemoveFromPlayListButton = ({videoId, playlist_name}) => {
  const { state, dispatch } = useContext(PlayListContext);
  return(
    <button className="btn btn-link2 "
    onClick={() =>dispatch({type:"REMOVE_FROM_PLAYLIST", payload: playlist_name, payload2: videoId}) }
    >Remove</button>
  )
}