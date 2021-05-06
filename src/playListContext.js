import { createContext, useReducer } from "react";

export const PlayListContext = createContext();

export const PlayListProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducerFunc, [
        {
            playlist_name: "Watch Later", videos: [
                {
                    videoId: "qsCUE7kzFHA",
                    title: "Investing In Your 20s Simplified - 2021 by @Shashank Udupa​ | Episode 1",
                    views: "27584* Views",
                    author: "Shashank Udupa",
                    authorImg: " https://yt3.ggpht.com/ytc/AAUvwngcam1qyJtXZSiM5ok78HKog6FVlMBPqd6dM01fGQ=s176-c-k-c0x00ffffff-no-rj-mo",
                    likes: "2.7K",
                    thumbnail: "https://i.ytimg.com/vi/qsCUE7kzFHA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxGw1yx9loUkJQkhxelsB-p48pFw",
                    description: ""
                    
                },
                {
                    videoId: "gSnoeukCVX0",
                    title: "Financial Planning कैसे करें ? Simple Financial Planning for Everyone ",
                    views: "135,407* views",
                    author: "Pranjal Kamra",
                    authorImg: "https://yt3.ggpht.com/ytc/AAUvwngY1SgK5Ib83DYx8yr2dI2s7Ke7dgkYtHdo8V6jig=s176-c-k-c0x00ffffff-no-rj-mo",
                    likes:"6.6K",
                    thumbnail: "https://i.ytimg.com/vi/RieqxXMds64/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCWc74kwuO4MVDYgc8oKP8c7UoeVQ",
                    description:""
                }
            ]
        },
    ])

    return(
        <PlayListContext.Provider value={{state, dispatch}}>
            {children}
        </PlayListContext.Provider>
    )
}

const reducerFunc = (state, {type, payload, payload2}) => {
    switch (type) {
        case "ADD_PLAY_LIST_NAME":
            return state =  [...state, {playlist_name: payload, videos: [] } ];
        case "REMOVE_PLAYLIST":
            return state = state.filter(item => item.playlist_name !== payload)    
        case "ADD-VIDEO-TO-PLAYLIST":
           return state =  state.map(playlist => {
                if(playlist.playlist_name === payload ){
                return {...playlist, videos: [...playlist.videos, payload2]}
                }
                return playlist;
              });
        case "REMOVE_FROM_PLAYLIST":
            return state =  state.map(playlist => {
                if(playlist.playlist_name === payload){
                return {...playlist,  videos: playlist.videos.filter(item => item.videoId !== payload2)}
                }
                return playlist;
              });
        default:
            break;
    }
}
