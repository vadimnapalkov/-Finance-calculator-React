import { PAYMENTS_VALUES_REQUEST } from "../constants/Payments";
import { PAYMENTS_VALUES_SUCCESS } from "../constants/Payments";
import { PAYMENTS_VALUES_FAIL } from "../constants/Payments";

import { PAYMENTS_ADD_VALUES_REQUEST } from "../constants/Payments";
import { PAYMENTS_ADD_VALUES_SUCCESS } from "../constants/Payments";
import { PAYMENTS_ADD_VALUES_FAIL } from "../constants/Payments";

import { PaymentsValuesApi, PaymentsAddValuesApi } from "../api/PaymentsApi";

export const FetchPaymentsValues = userid => async dispatch => {
  dispatch({ type: PAYMENTS_VALUES_REQUEST });

  const Values = await PaymentsValuesApi(userid);
  if (Values) {
    dispatch({
      type: PAYMENTS_VALUES_SUCCESS,
      payload: Values
    });
  } else {
    dispatch({
      type: PAYMENTS_VALUES_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};

export const AddPaymentsValue = (
  userid,
  categoryId,
  value
) => async dispatch => {
  dispatch({ type: PAYMENTS_ADD_VALUES_REQUEST });

  const Value = await PaymentsAddValuesApi(userid, categoryId, value);
  if (Value) {
    dispatch({
      type: PAYMENTS_ADD_VALUES_SUCCESS,
      payload: Value
    });
  } else {
    dispatch({
      type: PAYMENTS_ADD_VALUES_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};
