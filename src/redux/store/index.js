import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteSong from "../reducers/favoriteSong";
import currentSongMusic from "../reducers/currentSongMusic";

const globalReducers = combineReducers({
  favorites: favoriteSong,
  current: currentSongMusic,
});

const store = configureStore({
  reducer: globalReducers,
});

export default store;
