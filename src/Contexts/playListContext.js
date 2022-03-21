
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { baseurl } from "../utils/forApi";

export const PlayListContext = createContext();

export const PlayListProvider = ({ children }) => {
  
  const [allVideosData, setAllVideosData] = useState();
  // const [tokenn, setTokenn] = useState(null)

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseurl}/videos`);
      setAllVideosData(response.data.data);
    })();
  }, []);
  
  

  return (
    <PlayListContext.Provider
      value={{  allVideosData }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlayList = () => {
  return useContext(PlayListContext);
};
