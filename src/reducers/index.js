import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { userReducer } from "./user";
import { CategoriesReducer } from "./categories";
import { ValuesPayReducer } from "./values_pay";

export default combineReducers({
  routing: routerReducer,
  user: userReducer,
  categories: CategoriesReducer,
  payments: ValuesPayReducer
});
