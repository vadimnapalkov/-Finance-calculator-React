import {
  PAYMENTS_VALUES_REQUEST,
  PAYMENTS_VALUES_SUCCESS,
  PAYMENTS_VALUES_FAIL,
  PAYMENTS_ADD_VALUES_REQUEST,
  PAYMENTS_ADD_VALUES_SUCCESS,
  PAYMENTS_ADD_VALUES_FAIL
} from "../constants/Payments";

const initialState = {
  values: [],
  error: ""
};

export function ValuesPayReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENTS_VALUES_REQUEST:
      return { ...state, error: "" };

    case PAYMENTS_VALUES_SUCCESS:
      const values = action.payload;
      values.reverse();
      return { ...state, values: values };

    case PAYMENTS_VALUES_FAIL:
      return { ...state, error: action.payload.message };

    case PAYMENTS_ADD_VALUES_REQUEST:
      return { ...state, error: "" };

    case PAYMENTS_ADD_VALUES_SUCCESS:
      const valuesadd = state.values;
      valuesadd.unshift(action.payload[0]);
      return { ...state, values: valuesadd };

    case PAYMENTS_ADD_VALUES_FAIL:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}
