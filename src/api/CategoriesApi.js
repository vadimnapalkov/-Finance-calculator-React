import axios from "axios";

export const PaymentsApi = async userid => {
  const res = await axios.post(`http://localhost:3001/api/categories/pay`, {
    userid
  });
  return res.data;
};

export const IncomeApi = async userid => {
  const res = await axios.post(`http://localhost:3001/api/categories/inc`, {
    userid
  });
  return res.data;
};

export const IncomeAddApi = async (userid, nameinc) => {
  const res = await axios.post(`http://localhost:3001/api/categories/add/inc`, {
    userid,
    nameinc
  });
  return res.data;
};

export const PaymentsAddApi = async (userid, namepay) => {
  const res = await axios.post(`http://localhost:3001/api/categories/add/pay`, {
    userid,
    namepay
  });
  return res.data;
};

export const PaymentsDeleteApi = async (id, name, userid) => {
  const res = await axios.post(
    `http://localhost:3001/api/categories/delete/pay`,
    {
      id,
      name,
      userid
    }
  );
  return res.data;
};

export const IncomeDeleteApi = async (id, name, userid) => {
  const res = await axios.post(
    `http://localhost:3001/api/categories/delete/inc`,
    {
      id,
      name,
      userid
    }
  );
  return res.data;
};

export const PaymentsRenameApi = async (id, newname, name, userid) => {
  const res = await axios.post(
    `http://localhost:3001/api/categories/rename/pay`,
    {
      id,
      newname,
      name,
      userid
    }
  );
  return res.data;
};

export const IncomeRenameApi = async (id, newname, name, userid) => {
  const res = await axios.post(
    `http://localhost:3001/api/categories/rename/inc`,
    {
      id,
      newname,
      name,
      userid
    }
  );
  return res.data;
};
