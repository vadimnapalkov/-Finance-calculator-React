import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { userReducer } from "./user";
import { CategoriesReducer } from "./categories";
import { ValuesPaymentsReducer } from "./values_payments";
import { ValuesIncomeReducer } from "./values_income";
import { DatesReducer } from "./dates";
import { ChartsReducer } from "./charts";

export default combineReducers({
  routing: routerReducer,
  user: userReducer,
  categories: CategoriesReducer,
  payments: ValuesPaymentsReducer,
  income: ValuesIncomeReducer,
  dates: DatesReducer,
  charts: ChartsReducer
});
