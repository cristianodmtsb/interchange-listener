import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistsTypes } from "../Ducks/playlists";
import { Types as PlaylistDetailsTypes } from "../Ducks/playlistDetails";
import { Types as ChapterListsTypes } from "../Ducks/chapterList";

import { getPlaylists } from "./playlists";
import { getPlaylistDetails } from "./playlistDetails";
import { getChapterLists } from "./chapterList";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails),
    takeLatest(ChapterListsTypes.GET_REQUEST, getChapterLists)
  ]);
}
