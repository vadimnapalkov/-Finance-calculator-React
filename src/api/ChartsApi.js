import axios from "axios";

export const FetchDatesApi = async userid => {
  const res = await axios.get(
    `http://localhost:3001/api/charts/date/` + userid
  );
  return res.data;
};
export const FetchDataForChartsApi = async (userid, date) => {
  const res = await axios.get(
    `http://localhost:3001/api/charts?userid=` + userid + `&date=` + date
  );
  const dataForCharts = JSON.parse(res.data);
  return dataForCharts;
};
