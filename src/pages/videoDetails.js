import { useParams } from "react-router-dom";
import { usePlayList } from "../Contexts/playListContext";
import { useAuth } from "../Contexts/authContext";
import { DetailPageCard } from "../components/Cards/detailPageCard";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { allVideosData } = usePlayList();
  const { token } = useAuth();

  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video.videoId === videoId);
  }

  let video;
  if (allVideosData !== undefined) {
    video = getVideoDetails(allVideosData, videoId);
  }

  return allVideosData !== undefined ? (
    <>
      <DetailPageCard video={video} />
    </>
  ) : (
    <h1>Loading</h1>
  );
};


