export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE";
export const CURRENT_SONG_MUSIC = "CURRENT_SONG_MUSIC";

export const addToFavorite = (song) => {
  return { type: ADD_TO_FAVORITE, payload: song };
};

export const removeToFavorite = (song) => {
  return { type: REMOVE_TO_FAVORITE, payload: song };
};

export const currentSongMusic = (song) => {
  return { type: CURRENT_SONG_MUSIC, payload: song };
};
