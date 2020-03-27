import {
  GET_TODOS,
  SAVE_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS
} from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TODOS}_PENDING`:
    case `${SAVE_TODOS}_PENDING`:
    case `${DELETE_TODOS}_PENDING`:
    case `${UPDATE_TODOS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TODOS}_REJECTED`:
    case `${SAVE_TODOS}_REJECTED`:
    case `${DELETE_TODOS}_REJECTED`:
    case `${UPDATE_TODOS}_REJECTED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TODOS}_FULFILLED`:
    case `${SAVE_TODOS}_FULFILLED`:
    case `${DELETE_TODOS}_FULFILLED`:
    case `${UPDATE_TODOS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
