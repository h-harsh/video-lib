import { useAuth } from "../Contexts/authContext";
import { usePlayList } from "../Contexts/playListContext";
import { addToHistory } from "../utils/history";
import { SmallCard } from "../components/Cards/smallCard";

export const Home = () => {
  const { allVideosData } = usePlayList();
  const { state, dispatch, token } = useAuth();

  return (
    <div>
      <div>
        {allVideosData ? (
          allVideosData.map((item, i) => (
              <a onClick={() => addToHistory(item, dispatch, token)}>
            <SmallCard
              {...item}
            />
            </a>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </div>
  );
};
