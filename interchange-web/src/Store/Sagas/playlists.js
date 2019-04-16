import { call, put } from "redux-saga/effects";
import api from "../../Services/api";

import { Creators as PlaylistsActions } from "../Ducks/playlists";
import { Creators as ErrorActions } from "../Ducks/error";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/books");

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possivel obter as playlist"));
  }
}
