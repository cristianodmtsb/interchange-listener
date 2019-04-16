import { call, put } from "redux-saga/effects";
import api from "../../Services/api";

import { Creators as PlaylistDetailsActions } from "../Ducks/playlistDetails";
import { Creators as ErrorActions } from "../Ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/books/${action.payload.id}?_embed=exercises`
    );

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorActions.setError("Não foi possivel obter os detalhes da playlist")
    );
  }
}
