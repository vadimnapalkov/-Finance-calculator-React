import { LOGIN_REQUEST } from "../constants/User";
import { LOGIN_SUCCESS } from "../constants/User";
import { LOGIN_FAIL } from "../constants/User";

import { REGISTER_REQUEST } from "../constants/User";
import { REGISTER_SUCCESS } from "../constants/User";
import { REGISTER_FAIL } from "../constants/User";
import { LOGOUT_SUCCESS } from "../constants/User";

import { RegisterUserApi, LoginUserApi } from "../api/UserApi";

export const RegisterUser = user => async dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  const User = await RegisterUserApi(user);
  localStorage.removeItem("User_Finance");
  let localUser = JSON.stringify(User);
  localStorage.setItem("User_Finance", localUser);
  if (User) {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: User
    });
  } else {
    dispatch({
      type: REGISTER_FAIL,
      error: true,
      payload: new Error("Username already taken!")
    });
  }
};

export const LoginUser = user => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  const User = await LoginUserApi(user);
  localStorage.removeItem("User_Finance");
  let localUser = JSON.stringify(User);
  localStorage.setItem("User_Finance", localUser);
  if (User) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: User
    });
  } else {
    dispatch({
      type: LOGIN_FAIL,
      error: true,
      payload: new Error("Sorry! invalid credentials")
    });
  }
};

export const LogoutUser = () => dispatch => {
  localStorage.removeItem("User_Finance");
  dispatch({
    type: LOGOUT_SUCCESS,
    payload: {}
  });
};
