import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistsTypes } from "../Ducks/playlists";
import { getPlaylists } from "./playlists";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
}
