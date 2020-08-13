import { call, takeLatest, put, takeEvery } from "redux-saga/effects"

// Actions
import {
  GET_ROLES,
  GET_ROLES_REQUESTED,
  SET_LOADING,
  SET_LIMIT,
  SET_LIMIT_REQUESTED
} from "../actions/role-action"

// Api's
import { getAllRoles } from "../api/role-api"

function* getRoles({ payload }) {
  yield put({ type: SET_LOADING })

  const roles = yield call(getAllRoles, payload.page, payload.limit)

  yield put({ type: GET_ROLES, payload: roles })
}

function* setLimit({ payload }) {
  yield put({ type: SET_LIMIT, payload })
}

export default function* todoSaga() {
  yield takeLatest(GET_ROLES_REQUESTED, getRoles)
  yield takeEvery(SET_LIMIT_REQUESTED, setLimit)
}
