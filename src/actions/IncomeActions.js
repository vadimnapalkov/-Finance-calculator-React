import { INCOME_VALUES_REQUEST } from "../constants/Income";
import { INCOME_VALUES_SUCCESS } from "../constants/Income";
import { INCOME_VALUES_FAIL } from "../constants/Income";

import { INCOME_ADD_VALUES_REQUEST } from "../constants/Income";
import { INCOME_ADD_VALUES_SUCCESS } from "../constants/Income";
import { INCOME_ADD_VALUES_FAIL } from "../constants/Income";

import { IncomeValuesApi, IncomeAddValuesApi } from "../api/IncomeApi.js";

export const FetchIncomeValues = userid => async dispatch => {
  dispatch({ type: INCOME_VALUES_REQUEST });

  const Values = await IncomeValuesApi(userid);
  if (Values) {
    dispatch({
      type: INCOME_VALUES_SUCCESS,
      payload: Values
    });
  } else {
    dispatch({
      type: INCOME_VALUES_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};

export const AddIncomeValue = (userid, categoryId, value) => async dispatch => {
  dispatch({ type: INCOME_ADD_VALUES_REQUEST });

  const Value = await IncomeAddValuesApi(userid, categoryId, value);
  if (Value) {
    dispatch({
      type: INCOME_ADD_VALUES_SUCCESS,
      payload: Value
    });
  } else {
    dispatch({
      type: INCOME_ADD_VALUES_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};
