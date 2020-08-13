import { SET_LOADING, GET_ROLES, SET_LIMIT } from "../actions/role-action"

const initialState = {
  message: "",
  status: "",
  roles: [],
  limit: null,
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ROLES:
      return {
        ...state,
        message: payload.Message,
        status: payload.Status,
        roles: payload.Data,
        loading: false
      }
    case SET_LIMIT:
      return {
        ...state,
        limit: payload
      }
    default:
      return state
  }
}
