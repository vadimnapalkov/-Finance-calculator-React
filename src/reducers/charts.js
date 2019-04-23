import {
  FETCH_DATA_FOR_CHARTS_REQUEST,
  FETCH_DATA_FOR_CHARTS_SUCCESS,
  FETCH_DATA_FOR_CHARTS_FAIL
} from "../constants/Charts";

const initialState = {
  data: {
    paymentsCategories: [],
    payments: [],
    incomingCategories: [],
    incoming: []
  },
  error: ""
};

export function ChartsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_FOR_CHARTS_REQUEST:
      return { ...state, error: "" };

    case FETCH_DATA_FOR_CHARTS_SUCCESS:
      return { ...state, data: action.payload };

    case FETCH_DATA_FOR_CHARTS_FAIL:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}
