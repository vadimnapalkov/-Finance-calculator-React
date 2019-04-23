import {
  FETCH_DATES_REQUEST,
  FETCH_DATES_SUCCESS,
  FETCH_DATES_FAIL
} from "../constants/Charts";

const initialState = { values: [], error: "" };

export function DatesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATES_REQUEST:
      return { ...state, error: "" };

    case FETCH_DATES_SUCCESS:
      let dates = action.payload.reverse();
      return { ...state, values: dates };

    case FETCH_DATES_FAIL:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}
