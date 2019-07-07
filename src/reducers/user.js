import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../constants/User";

const initialState = {
  user: "",
  error: ""
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, error: "" };

    case LOGIN_SUCCESS:
      state = action.payload;
      return state;

    case LOGIN_FAIL:
      return { ...state, error: action.payload.message };

    case REGISTER_REQUEST:
      return { ...state, error: "" };

    case REGISTER_SUCCESS:
      state = action.payload;
      return state;

    case REGISTER_FAIL:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}
