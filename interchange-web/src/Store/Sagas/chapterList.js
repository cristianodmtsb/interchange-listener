import { call, put } from "redux-saga/effects";
import api from "../../Services/api";

import { Creators as ChapterListsActions } from "../Ducks/playlists";
import { Creators as ErrorActions } from "../Ducks/error";

export function* getChapterLists(action) {
  try {
    const response = yield call(
      api.get,
      `/exercises?bookId=${action.payload.id}&unit=${action.payload.unit}`
    );

    yield put(ChapterListsActions.getChapterListSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possivel obter as playlist"));
  }
}
