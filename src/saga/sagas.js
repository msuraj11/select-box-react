import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";

function* fetchData(action) {
  if (action.url !== "") {
    const json = yield fetch(action.url).then(response => response.json());
    yield put({
      type: actionTypes.SELECT_API,
      payload: json.items
    });
  } else {
    yield put({ type: actionTypes.SELECT_API, payload: [] });
  }
}

export default function* actionWatcher() {
  yield takeLatest(actionTypes.LOADING, fetchData);
}
