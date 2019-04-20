import axios from "axios";

export const PaymentsValuesApi = async userid => {
  const res = await axios.get(`http://localhost:3001/api/payments/` + userid);
  return res.data;
};
export const PaymentsAddValuesApi = async (userid, categoryId, value) => {
  const res = await axios.post(`http://localhost:3001/api/payments/add`, {
    userid,
    categoryId,
    value
  });
  return res.data;
};
