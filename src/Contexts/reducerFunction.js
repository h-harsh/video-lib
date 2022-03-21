/* eslint-disable */
export const reducerFunc = (state, {type, payload}) => {
    switch (type) {
        case "INITIAL_LOAD":
            return state = payload;
        case "INITIAL_LOAD_HISTORY":
            return state = {...state, history: payload};
        case "INITIAL_LOAD_LIKED_VIDEOS":
            return state = {...state, likedVideos: payload }       

        case "ADD_PLAY_LIST_NAME":
            return state = {...state, playlists: [...state.playlists, {playlistName: payload, videos: [] } ]}
        case "REMOVE_PLAYLIST":
            return state = {...state, playlists: state.playlists.filter(item => item.playlistName !== payload)}    
        case "ADD-VIDEO-TO-PLAYLIST":
              return state =  {...state, playlists: state.playlists.map(playlist => {
                if(playlist.playlistName === payload.playlistName ){
                return {...playlist, videos: [...playlist.videos, payload.videoObj]}
                }
                return playlist;
              })}
        case "REMOVE_FROM_PLAYLIST":
            return state =  {...state, playlists: state.playlists.map(playlist => {
                if(playlist.playlistName === payload.playlistName){
                return {...playlist,  videos: playlist.videos.filter(item => item._id !== payload.videoId)}
                }
                return playlist;
              })};

        case "ADD_TO_HISTORY":
            return state = {...state, history: [...state.history, payload]};
        case "CLEAR_HISTORY":
            return state = {...state, history: []};    
         
        case "ADD_TO_LIKED":
            return state = {...state, likedVideos: [...state.likedVideos, payload]}
        case "REMOVE_FROM_LIKED":
            return state = {...state, likedVideos: state.likedVideos.filter(item => item._id != payload._id)}
            
        case "LOG_OUT":
            return state= undefined
        default:
            return state
    }
}