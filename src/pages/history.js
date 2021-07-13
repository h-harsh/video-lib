import { HorizontalCard } from "../components/Cards/horizontalCard";
import { useAuth } from "../Contexts/authContext";
import { clearHistory } from "../utils/history";

export const History = () => {
  const { state, dispatch, token } = useAuth();
  return (
    <div>
      {state?.history?.length > 0 ? 
      state?.history?.map((video) => {
        return (
          <>
            <HorizontalCard video={video} />
          </>
        );
      }) 
      :
      <h1 style={{fontWeight: "800"}} >History was cleared</h1>
      }

      <div>
        {state?.history?.length > 0 ? (
          <button
            className="nm-btn2"
            onClick={() => clearHistory(token, dispatch)}
          >
            Clear history
          </button>
        ) : null}
      </div>
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