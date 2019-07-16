import { combineReducers } from "redux";
import playlists from "./playlists";
import playlistDetails from "./playlistDetails";
import error from "./error";
import player from "./player";
import chapterlist from "./chapterList";

export default combineReducers({
  playlists,
  playlistDetails,
  chapterlist,
  error,
  player
});
