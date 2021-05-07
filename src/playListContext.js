import { createContext, useReducer, useContext } from "react";
import {reducerFunc} from './reducerFunction';
import {defaultPlaylist} from './dataApi/data'

export const PlayListContext = createContext();

export const PlayListProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducerFunc, defaultPlaylist )

    return(
        <PlayListContext.Provider value={{state, dispatch}}>
            {children}
        </PlayListContext.Provider>
    )
}

export const usePlayList = () => {
    return useContext(PlayListContext);
  };
