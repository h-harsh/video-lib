/* eslint-disable */
import { useAuth } from "../Contexts/authContext";
import { usePlayList } from "../Contexts/playListContext";
import { addToHistory } from "../utils/history";
import { SmallCard } from "../components/Cards/smallCard";
import Loader from "react-loader-spinner";

export const Home = () => {
  const { allVideosData } = usePlayList();
  const {  dispatch, token } = useAuth();

  return (
    <div>
      {/* <div> */}

      {allVideosData ? (
        <div className="card-holder">
          {allVideosData.map((item, i) => (
            <a href="#" onClick={() => addToHistory(item, dispatch, token)}>
              <SmallCard {...item} />
            </a>
          ))}
        </div>
      ) : (
        <div className="loader-prod">
          <Loader
            type="Puff"
            color="#5c415d"
            height={100}
            width={100}
            timeout={5000}
          />
        </div>
      )}
      {/* </div> */}
    </div>
  );
};
