import { useAuth } from "../Contexts/authContext";
import { usePlayList } from "../Contexts/playListContext";
import { addToHistory } from "../utils/history";
import { SmallCard } from "../components/Cards/smallCard";
import Loader from "react-loader-spinner";

export const Home = () => {
  const { allVideosData } = usePlayList();
  const { state, dispatch, token } = useAuth();

  return (
    <div>
      <div>
        {allVideosData ? (
          allVideosData.map((item, i) => (
            <a onClick={() => addToHistory(item, dispatch, token)}>
              <SmallCard {...item} />
            </a>
          ))
        ) : (
          <div className="loader-prod">
            <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
            timeout={5000} 
          />
          </div>
        )}
      </div>
    </div>
  );
};
