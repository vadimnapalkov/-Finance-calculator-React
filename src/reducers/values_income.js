import {
  INCOME_VALUES_REQUEST,
  INCOME_VALUES_SUCCESS,
  INCOME_VALUES_FAIL,
  INCOME_ADD_VALUES_REQUEST,
  INCOME_ADD_VALUES_SUCCESS,
  INCOME_ADD_VALUES_FAIL
} from "../constants/Income";

const initialState = {
  values: [],
  error: ""
};

export function ValuesIncomeReducer(state = initialState, action) {
  switch (action.type) {
    case INCOME_VALUES_REQUEST:
      return { ...state, error: "" };

    case INCOME_VALUES_SUCCESS:
      const values = action.payload;
      values.reverse();
      return { ...state, values: values };

    case INCOME_VALUES_FAIL:
      return { ...state, error: action.payload.message };

    case INCOME_ADD_VALUES_REQUEST:
      return { ...state, error: "" };

    case INCOME_ADD_VALUES_SUCCESS:
      const valuesadd = state.values;
      valuesadd.unshift(action.payload[0]);
      return { ...state, values: valuesadd };

    case INCOME_ADD_VALUES_FAIL:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}
