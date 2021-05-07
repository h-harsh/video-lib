export const reducerFunc = (state, {type, payload}) => {
    switch (type) {
        case "ADD_PLAY_LIST_NAME":
            return state =  [...state, {playlist_name: payload.playlistName, videos: [] } ];
        case "REMOVE_PLAYLIST":
            return state = state.filter(item => item.playlist_name !== payload.playlistName)    
        case "ADD-VIDEO-TO-PLAYLIST":
           return state =  state.map(playlist => {
                if(playlist.playlist_name === payload.playlistName ){
                return {...playlist, videos: [...playlist.videos, payload.videoObj]}
                }
                return playlist;
              });
        case "REMOVE_FROM_PLAYLIST":
            return state =  state.map(playlist => {
                if(playlist.playlist_name === payload.playlistName){
                return {...playlist,  videos: playlist.videos.filter(item => item.videoId !== payload.videoObj)}
                }
                return playlist;
              });
        default:
            break;
    }
}