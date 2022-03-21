import { HorizontalCard } from "../components/Cards/horizontalCard";
import { useAuth } from "../Contexts/authContext";
import { clearHistory } from "../utils/history";
import { PrimaryButton } from "../New Components";
import Loader from "react-loader-spinner";

export const History = () => {
  const { state, dispatch, token } = useAuth();
  console.log(state);
  return (
    <div>
      <div style={{ margin: "1rem" }}>
        {state?.history?.length > 0 ? (
          <PrimaryButton
            text="Clear History"
            clickHandler={() => clearHistory(token, dispatch)}
          />
        ) : null}
      </div>
      {state.history ? (
        <div>
          {state?.history?.length > 0 ? (
            state?.history?.map((video) => {
              return (
                <>
                  <HorizontalCard video={video} />
                </>
              );
            })
          ) : (
            <h1 style={{ fontWeight: "800" }}>History was cleared</h1>
          )}
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
    </div>
  );
};

// state?.history?.map((video) => {
//     return (
//       <>
//         <HorizontalCard video={video} />
//       </>
//     );
//   })
