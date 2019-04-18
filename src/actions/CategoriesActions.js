import { PAYMENTS_REQUEST } from "../constants/Categories";
import { PAYMENTS_SUCCESS } from "../constants/Categories";
import { PAYMENTS_FAIL } from "../constants/Categories";

import { INCOME_REQUEST } from "../constants/Categories";
import { INCOME_SUCCESS } from "../constants/Categories";
import { INCOME_FAIL } from "../constants/Categories";

import { PAYMENTS_ADD_REQUEST } from "../constants/Categories";
import { PAYMENTS_ADD_SUCCESS } from "../constants/Categories";
import { PAYMENTS_ADD_FAIL } from "../constants/Categories";

import { INCOME_ADD_REQUEST } from "../constants/Categories";
import { INCOME_ADD_SUCCESS } from "../constants/Categories";
import { INCOME_ADD_FAIL } from "../constants/Categories";

import { PAYMENTS_DELETE_REQUEST } from "../constants/Categories";
import { PAYMENTS_DELETE_SUCCESS } from "../constants/Categories";
import { PAYMENTS_DELETE_FAIL } from "../constants/Categories";

import { INCOME_DELETE_REQUEST } from "../constants/Categories";
import { INCOME_DELETE_SUCCESS } from "../constants/Categories";
import { INCOME_DELETE_FAIL } from "../constants/Categories";

import { PAYMENTS_RENAME_REQUEST } from "../constants/Categories";
import { PAYMENTS_RENAME_SUCCESS } from "../constants/Categories";
import { PAYMENTS_RENAME_FAIL } from "../constants/Categories";

import { INCOME_RENAME_REQUEST } from "../constants/Categories";
import { INCOME_RENAME_SUCCESS } from "../constants/Categories";
import { INCOME_RENAME_FAIL } from "../constants/Categories";

import {
  PaymentsApi,
  IncomeApi,
  IncomeAddApi,
  PaymentsAddApi,
  IncomeDeleteApi,
  PaymentsDeleteApi,
  PaymentsRenameApi,
  IncomeRenameApi
} from "../api/CategoriesApi";

export const FetchPaymentsCategories = userid => async dispatch => {
  dispatch({ type: PAYMENTS_REQUEST });

  const Payments = await PaymentsApi(userid);
  if (Payments) {
    dispatch({
      type: PAYMENTS_SUCCESS,
      payload: Payments
    });
  } else {
    dispatch({
      type: PAYMENTS_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};

export const FetchIncomeCategories = userid => async dispatch => {
  dispatch({ type: INCOME_REQUEST });

  const Income = await IncomeApi(userid);
  if (Income) {
    dispatch({
      type: INCOME_SUCCESS,
      payload: Income
    });
  } else {
    dispatch({
      type: INCOME_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};

export const AddCategoryInc = (userid, nameinc) => async dispatch => {
  dispatch({ type: INCOME_ADD_REQUEST });

  const Inc = await IncomeAddApi(userid, nameinc);
  if (Inc) {
    dispatch({
      type: INCOME_ADD_SUCCESS,
      payload: Inc
    });
  } else {
    dispatch({
      type: INCOME_ADD_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};

export const AddCategoryPay = (userid, namepay) => async dispatch => {
  dispatch({ type: PAYMENTS_ADD_REQUEST });

  const Pay = await PaymentsAddApi(userid, namepay);
  if (Pay) {
    dispatch({
      type: PAYMENTS_ADD_SUCCESS,
      payload: Pay
    });
  } else {
    dispatch({
      type: PAYMENTS_ADD_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};

export const DeletePayCategory = (id, name, userid) => async dispatch => {
  dispatch({ type: PAYMENTS_DELETE_REQUEST });

  const Delete = await PaymentsDeleteApi(id, name, userid);
  if (Delete) {
    dispatch({
      type: PAYMENTS_DELETE_SUCCESS,
      payload: Delete
    });
  } else {
    dispatch({
      type: PAYMENTS_DELETE_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};

export const DeleteIncCategory = (id, name, userid) => async dispatch => {
  dispatch({ type: INCOME_DELETE_REQUEST });

  const Delete = await IncomeDeleteApi(id, name, userid);
  if (Delete) {
    dispatch({
      type: INCOME_DELETE_SUCCESS,
      payload: Delete
    });
  } else {
    dispatch({
      type: INCOME_DELETE_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};

export const RenameCategoryPay = (
  id,
  newname,
  name,
  userid
) => async dispatch => {
  dispatch({ type: PAYMENTS_RENAME_REQUEST });

  const newpay = await PaymentsRenameApi(id, newname, name, userid);
  if (newpay) {
    const pay = { id: id, name: name };
    dispatch({
      type: PAYMENTS_RENAME_SUCCESS,
      payload: { pay: pay, newpay: newpay }
    });
  } else {
    dispatch({
      type: PAYMENTS_RENAME_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};

export const RenameCategoryInc = (
  id,
  newname,
  name,
  userid
) => async dispatch => {
  dispatch({ type: INCOME_RENAME_REQUEST });

  const newinc = await IncomeRenameApi(id, newname, name, userid);
  if (newinc) {
    const inc = { id: id, name: name };
    dispatch({
      type: INCOME_RENAME_SUCCESS,
      payload: { inc: inc, newinc: newinc }
    });
  } else {
    dispatch({
      type: INCOME_RENAME_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded")
    });
  }
};
