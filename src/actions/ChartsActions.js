import {
  FETCH_DATES_REQUEST,
  FETCH_DATES_SUCCESS,
  FETCH_DATES_FAIL,
  FETCH_DATA_FOR_CHARTS_REQUEST,
  FETCH_DATA_FOR_CHARTS_SUCCESS,
  FETCH_DATA_FOR_CHARTS_FAIL
} from "../constants/Charts";
import { FetchDatesApi, FetchDataForChartsApi } from "../api/ChartsApi";

export const FetchDates = userid => async dispatch => {
  dispatch({ type: FETCH_DATES_REQUEST });

  const Dates = await FetchDatesApi(userid);
  if (Dates) {
    dispatch({
      type: FETCH_DATES_SUCCESS,
      payload: Dates
    });
  } else {
    dispatch({
      type: FETCH_DATES_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};
export const FetchDataForCharts = (userid, date) => async dispatch => {
  dispatch({ type: FETCH_DATA_FOR_CHARTS_REQUEST });

  const dataForCharts = await FetchDataForChartsApi(userid, date);
  if (dataForCharts) {
    dispatch({
      type: FETCH_DATA_FOR_CHARTS_SUCCESS,
      payload: dataForCharts
    });
  } else {
    dispatch({
      type: FETCH_DATA_FOR_CHARTS_FAIL,
      error: true,
      payload: new Error("Sorry, no data was uploaded!")
    });
  }
};
