import * as SongUtil from "../util/song_api_util";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

const receiveAllSongs = (songs) =>{
    return (
    {
    type: RECEIVE_ALL_SONGS, 
    songs: songs
    })
}
const receiveSong = (song) =>({
    type: RECEIVE_SONG, 
    song
})

const removeSong = (songId) => ({
    type: REMOVE_SONG,
    songId
})

export const fetchSongs = () => dispatch => (
    SongUtil.fetchSongs().then((songs) => dispatch(receiveAllSongs(songs)))
)
export const fetchSong = (id) => dispatch => (
    SongUtil.fetchSongs(id).then((song) => dispatch(receiveSong(song)))
)