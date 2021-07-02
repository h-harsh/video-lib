import { createContext, useReducer, useContext, useEffect, useState } from "react";
import {reducerFunc} from './reducerFunction';
import {defaultPlaylist} from '../dataApi/data';
import axios from 'axios'
import {baseurl} from '../utils/forApi'

export const PlayListContext = createContext();

export const PlayListProvider = ({children}) => {
    const savedToken = JSON.parse(localStorage.getItem("token")) ||  null;
    const [token, setToken] = useState(savedToken);
    const [playlistData, setPlaylistData] = useState(undefined);

    const[state, dispatch] = useReducer(reducerFunc, playlistData )
    const [allVideosData, setAllVideosData] = useState()

    useEffect(() => {
        (async function (){
            const response = await axios.get(`${baseurl}/videos`)
            setAllVideosData(response.data.data)
        })()
    }, [])

    useEffect(() => {
        (async function () {
          if(token)
          {
            const response = await axios.get(`${baseurl}/playlist`, {
              headers: { authorization: token }
            });
            if (response.data.status === "success") {
              dispatch({type: "INITIAL_LOAD", payload: response.data.playlistData.playlists})
              
            }
          }
        })();
      }, []);
    
    return(
        <PlayListContext.Provider value={{state, dispatch, allVideosData}}>
            {children}
        </PlayListContext.Provider>
    )
}

export const usePlayList = () => {
    return useContext(PlayListContext);
  };

 