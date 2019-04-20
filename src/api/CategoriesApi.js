import axios from "axios";

export const PaymentsApi = async userid => {
  const res = await axios.get(
    `http://localhost:3001/api/categories/payments/` + userid
  );
  const payments = JSON.parse(res.data);
  return payments;
};

export const IncomeApi = async userid => {
  const res = await axios.get(
    `http://localhost:3001/api/categories/incoming/` + userid
  );
  const incoming = JSON.parse(res.data);
  return incoming;
};

export const IncomeAddApi = async (userid, nameinc) => {
  const res = await axios.post(
    `http://localhost:3001/api/categories/add/incoming`,
    {
      userid,
      nameinc
    }
  );
  return res.data;
};

export const PaymentsAddApi = async (userid, namepay) => {
  const res = await axios.post(
    `http://localhost:3001/api/categories/add/payments`,
    {
      userid,
      namepay
    }
  );
  return res.data;
};

export const PaymentsDeleteApi = async id => {
  const res = await axios.delete(
    `http://localhost:3001/api/categories/delete/payments/` + id
  );
  return res.data;
};

export const IncomeDeleteApi = async id => {
  const res = await axios.delete(
    `http://localhost:3001/api/categories/delete/incoming/` + id
  );
  return res.data;
};

export const PaymentsRenameApi = async (id, newname) => {
  const res = await axios.put(
    `http://localhost:3001/api/categories/rename/payments`,
    {
      id,
      newname
    }
  );
  return res.data;
};

export const IncomeRenameApi = async (id, newname) => {
  const res = await axios.put(
    `http://localhost:3001/api/categories/rename/incoming`,
    {
      id,
      newname
    }
  );
  return res.data;
};
