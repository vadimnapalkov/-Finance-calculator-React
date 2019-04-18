import {
  PAYMENTS_REQUEST,
  PAYMENTS_SUCCESS,
  PAYMENTS_FAIL,
  INCOME_REQUEST,
  INCOME_SUCCESS,
  INCOME_FAIL,
  PAYMENTS_ADD_REQUEST,
  PAYMENTS_ADD_SUCCESS,
  PAYMENTS_ADD_FAIL,
  INCOME_ADD_REQUEST,
  INCOME_ADD_SUCCESS,
  INCOME_ADD_FAIL,
  PAYMENTS_DELETE_REQUEST,
  PAYMENTS_DELETE_SUCCESS,
  PAYMENTS_DELETE_FAIL,
  INCOME_DELETE_REQUEST,
  INCOME_DELETE_SUCCESS,
  INCOME_DELETE_FAIL,
  PAYMENTS_RENAME_REQUEST,
  PAYMENTS_RENAME_SUCCESS,
  PAYMENTS_RENAME_FAIL,
  INCOME_RENAME_REQUEST,
  INCOME_RENAME_SUCCESS,
  INCOME_RENAME_FAIL
} from "../constants/Categories";

const initialState = {
  payments: [],
  income: [],
  error: ""
};

export function CategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENTS_REQUEST:
      return { ...state, error: "" };

    case PAYMENTS_SUCCESS:
      return { ...state, payments: action.payload };

    case PAYMENTS_FAIL:
      return { ...state, error: action.payload.message };

    case INCOME_REQUEST:
      return { ...state, error: "" };

    case INCOME_SUCCESS:
      return { ...state, income: action.payload };

    case INCOME_FAIL:
      return { ...state, error: action.payload.message };

    case PAYMENTS_ADD_REQUEST:
      return { ...state, error: "" };

    case PAYMENTS_ADD_SUCCESS:
      state.payments.push(action.payload);
      const newpay = state.payments;
      return { ...state, payments: newpay };

    case PAYMENTS_ADD_FAIL:
      return { ...state, error: action.payload.message };

    case INCOME_ADD_REQUEST:
      return { ...state, error: "" };

    case INCOME_ADD_SUCCESS:
      state.income.push(action.payload);
      const newinc = state.income;
      return { ...state, income: newinc };

    case INCOME_ADD_FAIL:
      return { ...state, error: action.payload.message };

    case PAYMENTS_DELETE_REQUEST:
      return { ...state, error: "" };

    case PAYMENTS_DELETE_SUCCESS:
      const deletepay = state.payments;
      deletepay.splice(
        deletepay.findIndex(pay => pay.id === action.payload.id),
        1
      );
      return { ...state, payments: deletepay };

    case PAYMENTS_DELETE_FAIL:
      return { ...state, error: action.payload.message };

    case INCOME_DELETE_REQUEST:
      return { ...state, error: "" };

    case INCOME_DELETE_SUCCESS:
      const deleteinc = state.income;
      deleteinc.splice(
        deleteinc.findIndex(inc => inc.id === action.payload.id),
        1
      );
      return { ...state, income: deleteinc };

    case INCOME_DELETE_FAIL:
      return { ...state, error: action.payload.message };

    case PAYMENTS_RENAME_REQUEST:
      return { ...state, error: "" };

    case PAYMENTS_RENAME_SUCCESS:
      const renamepay = state.payments;
      renamepay.find(pay => pay.id === action.payload.pay.id).name =
        action.payload.newpay.name;
      return { ...state, payments: renamepay };

    case PAYMENTS_RENAME_FAIL:
      return { ...state, error: action.payload.message };

    case INCOME_RENAME_REQUEST:
      return { ...state, error: "" };

    case INCOME_RENAME_SUCCESS:
      const renameinc = state.income;
      renameinc.find(inc => inc.id === action.payload.inc.id).name =
        action.payload.newinc.name;
      return { ...state, income: renameinc };

    case INCOME_RENAME_FAIL:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}
