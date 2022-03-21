import { useParams } from "react-router-dom";
import { usePlayList } from "../Contexts/playListContext";
import { DetailPageCard } from "../components/Cards/detailPageCard";
import Loader from "react-loader-spinner";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { allVideosData } = usePlayList();

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
    <div className="loader-prod">
      <Loader
        type="Puff"
        color="#5c415d"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};
