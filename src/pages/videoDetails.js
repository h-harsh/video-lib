import { useParams } from "react-router-dom";
import { Modale } from '../components/playListModal'
import { usePlayList } from "../Contexts/playListContext";
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseurl } from "../utils/forApi";
import { useAuth } from "../Contexts/authContext";
import {LikeButton} from '../components/Buttons/like'

export const VideoDetails = () => {
    const { videoId } = useParams();
    const {allVideosData} = usePlayList()
    const {token} = useAuth()
    
    function getVideoDetails(videos, videoId) {
        return videos.find((video) => video.videoId === videoId);
    }

    let video
    if(allVideosData !== undefined){
        video = getVideoDetails(allVideosData, videoId)
    }
     
    return ( allVideosData !== undefined ? 
        <>
            <div style={{borderBottom: "2px solid black"}} >
                <iframe width="1000" height="500"
                    src={`https://www.youtube.com/embed/${video.videoId}` }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div style={{borderBottom: "1px dashed black", height:"10rem"}} >
                <div className="sub-det-1">
                    <h1 className="video-title" >{video.title}</h1>
                    <img className="auth-img" src={video.authorImg} />
                    <h3 className="auth-name" >{video.author}</h3>
                </div>
                <div className="sub-det-2">
                    <p className="extra-vid" >{video.views}</p>
                    <p className="extra-vid" >{video.likes} Likes</p>
                    <Modale />
                    <LikeButton video={video}/>
                </div>
                <p>{video.description}</p>
            </div>
            <div style={{height: "12rem"}} className="sub-det-1">
                <h1>Video Description</h1>
            </div>
        </>
        :
        <h1>Loading</h1>
    )
}
