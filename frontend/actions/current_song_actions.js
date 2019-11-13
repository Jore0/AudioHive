export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const UPDATE_CURRENT_SONG_TIME = "UPDATE_CURRENT_SONG_TIME";
export const RESET_CURRENT_SONG = "RESET_CURRENT_SONG";
export const CURRENT_SONG_TIME_MINS = "CURRENT_SONG_TIME_MINS";
export const receiveCurrentSong = song => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const playSong = () => ({
  type: PLAY_SONG
});
export const pauseSong = () => ({
  type: PAUSE_SONG
});
export const updateCurrentSongTime = time => ({
  type: UPDATE_CURRENT_SONG_TIME,
  time
});
export const currentSongTimeMins = min => ({
  type: CURRENT_SONG_TIME_MINS,
  min
});
export const resetCurrentSong = () => ({
  type: RESET_CURRENT_SONG
});
