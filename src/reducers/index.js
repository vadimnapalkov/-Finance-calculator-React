import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { userReducer } from "./user";
import { CategoriesReducer } from "./categories";
import { ValuesPaymentsReducer } from "./values_payments";
import { ValuesIncomeReducer } from "./values_income";

export default combineReducers({
  routing: routerReducer,
  user: userReducer,
  categories: CategoriesReducer,
  payments: ValuesPaymentsReducer,
  income: ValuesIncomeReducer
});
