import axios from "axios";

export const IncomeValuesApi = async userid => {
  const res = await axios.get(`http://localhost:3001/api/income/` + userid);
  return res.data;
};
export const IncomeAddValuesApi = async (userid, categoryId, value) => {
  const res = await axios.post(`http://localhost:3001/api/income/add`, {
    userid,
    categoryId,
    value
  });
  return res.data;
};
