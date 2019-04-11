import { call, put } from "redux-saga/effects";
import api from "../../Services/api";

import { Creators as PlaylistsActions } from "../Ducks/playlists";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/books");

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
